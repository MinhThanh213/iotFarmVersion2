import { Injectable } from '@angular/core';
import { Client, MQTTError, Message } from 'paho-mqtt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MqttModuleServiceService {
  private client!: Client;
  private messageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private connectionPromise: Promise<void> | null = null;


  constructor() {
    this.client = new Client('6d838a7cf44b4af7a45b78d2c55652d3.s2.eu.hivemq.cloud', 8884, 'clientId-jm6NtFRspJ');
    this.connectionPromise = this.connect();
  }
  private async connect(): Promise<void> {
    const options = {
      useSSL: true,
      userName: 'duccanh',
      password: 'Canhb3oa1@',
    };
    return new Promise<void>((resolve, reject) => {
      this.client.connect({
        ...options,
        onSuccess: () => {
          this.onConnect();
          resolve();
        },
        onFailure: (error: MQTTError) => {
          reject(new Error(error.errorMessage));
        }
      });
    });
  }

  async waitUntilConnected(): Promise<void> {
    return this.connectionPromise ?? await Promise.resolve();
  }



  onConnect() {
    // console.log('Connected');
    this.client.subscribe('sensorReadings');
    this.client.onMessageArrived = this.onMessageArrived.bind(this);
  }

  getMessageSubject() {
    console.log("log : " + this.messageSubject.asObservable());
    return this.messageSubject.asObservable();
  }

  onConnectionLost(responseObject: MQTTError) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:" + responseObject.errorMessage);
    }
  }

  onMessageArrived = (message: Message) => {
    const payload = message.payloadString;
    console.log("onMessageArrived:" + message.payloadString);
    this.messageSubject.next(payload);
    // console.log("new data : " + this);
  }

  // Function to get the MQTT client instance
  getClient() {
    return this.client;
  }

}
