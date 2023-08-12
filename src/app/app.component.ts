import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MqttModuleServiceService } from 'src/app/services/mqtt-module-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private messageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  isCollapsed = false;
  messages: string[] = [];
  constructor(private mqttModule : MqttModuleServiceService) {
  }

  ngOnInit(): void {
    console.log("hello");

    this.initializeMQTTData();
  }

  initializeMQTTData() {
    console.log("client : " + this.mqttModule.getClient());
    
    // this.mqttModule.getClient().onConnectionLost = this.mqttModule.onConnectionLost.bind(this);
    this.mqttModule.onConnect();
  }

  // onConnect() {
  //   console.log('Connected');
  //   this.subscribeToMqttMessages();
  // }

  subscribeToMqttMessages() {
    this.mqttModule.getMessageSubject().subscribe((message) => {
      this.messages.push(message);
    });
  }



  publishMessage() {
    // const client: Client = this.mqttModule.getClient();
    // if (client.isConnected()) {
    //   client.send('my/test/topic', 'Hello', 0, false);
    // }
  }
}
