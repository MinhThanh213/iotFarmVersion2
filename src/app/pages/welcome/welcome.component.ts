import { Component, OnInit } from '@angular/core';
import { MqttModuleServiceService } from '../../services/mqttModule/mqtt-module-service.service';
import { ApiConfigService } from 'src/app/services/apiConfig/api-config.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  messages: string[] = [];
  currentTab = 'tab1'; // Khởi tạo tab đầu tiên
  name:string = ""
  code:string = ""
  isCodeValid!: boolean;
  constructor(private mqttModule : MqttModuleServiceService,private apiConfig : ApiConfigService) {
  }

  changeTab(tab: string) {
    this.currentTab = tab;
  }
  
  checkCode(){    
    const span = document.getElementById('errorCheckCode') as HTMLDivElement;
    this.apiConfig.checkCode(this.code).subscribe((e) => {
      if(e.code == '200'){
        this.isCodeValid= true;
        span.textContent = null;
      }else{
        this.isCodeValid= false;
        span.textContent = e.message;
      }
      
    });
    console.log(this.code);
    
  }

  ngOnInit(): void {
    this.initializeMQTTData();
  }

  async initializeMQTTData() {
    try{
      await this.mqttModule.waitUntilConnected();
      this.subscribeToMqttMessages();
    } catch (error){
      console.log("error", error);
    }
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
