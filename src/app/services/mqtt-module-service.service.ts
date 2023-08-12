import { Injectable } from '@angular/core';
import { Client, MQTTError, Message } from 'paho-mqtt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MqttModuleServiceService {
  private client!: Client;
  private messageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');


  constructor() {
    const options = {
      useSSL: true,
      userName: 'admin',
      password: 'Thanhnhu213',
    };

    this.client = new Client('05d268c5459c4484891ae16f981d7ecb.s2.eu.hivemq.cloud', 8083, 'clientId-jm6NtFRspJ');
    this.client.connect({ ...options, onSuccess: this.onConnect.bind(this) });
    this.client.onConnectionLost = this.onConnectionLost;
    this.client.onMessageArrived = this.onMessageArrived;
  }

  onConnect() {
    console.log('Connected');
    this.client.subscribe('my/test/topic');
    // this.client.onMessageArrived = this.onMessageArrived.bind(this);
  }

  getMessageSubject() {
    return this.messageSubject.asObservable();
  }

  onConnectionLost(responseObject: MQTTError) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:" + responseObject.errorMessage);
    }
  }

  onMessageArrived(message: Message) {
    const payload = message.payloadString;
    console.log("onMessageArrived:" + message.payloadString);
    this.messageSubject.next(payload);
    console.log("new data : ");
  }

  // Function to get the MQTT client instance
  getClient() {
    return this.client;
  }

}
