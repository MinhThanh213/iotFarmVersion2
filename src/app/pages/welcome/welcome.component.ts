import { Component, OnInit } from '@angular/core';
import { MqttModuleServiceService } from 'src/app/services/mqtt-module-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  messages: string[] = [];
  constructor(private mqttModule : MqttModuleServiceService) {
  }

  ngOnInit(): void {
    console.log("hello");

    this.initializeMQTTData();
  }

  initializeMQTTData() {
    this.mqttModule.getClient().onConnectionLost = this.mqttModule.onConnectionLost.bind(this);
    this.mqttModule.connect()
  }

  onConnect() {
    console.log('Connected');
    this.subscribeToMqttMessages();
  }

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
