import { AbstractLogger } from "../../interfaces/loggers/AbstractLogger";
import {Kafka, logLevel} from 'kafkajs';

const KAFKA_BROKER_ADDRESS = 'localhost:9092';

export function sendMessageToKafkaOnTopic(message: string, topic: string) {
    const kafka = new Kafka({
        brokers: [KAFKA_BROKER_ADDRESS],
        logLevel: logLevel.ERROR
    });

    const producer = kafka.producer();

    producer.connect().then(() => {
        producer.send({
            topic: topic,
            messages: [
                { value: message },
            ],
        }).then(() => {
            console.log('Successfully sent message on topic ' + topic);
        });
    });
};


export class KafkaLogger implements AbstractLogger {
    Log(entity: any): void {
        sendMessageToKafkaOnTopic(JSON.stringify(entity), entity.constructor.name);
    }
}