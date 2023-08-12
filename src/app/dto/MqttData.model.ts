export class MqttData {
    mqttServer: string;
    mqttTopic: string;

    constructor(mqttServer: string, mqttTopic: string) {
        this.mqttServer = mqttServer;
        this.mqttTopic = mqttTopic;
    }
}