import { AbstractEntity } from "../../interfaces/entities/AbstractEntity";

import { AbstractLogger } from "../../interfaces/loggers/AbstractLogger";

import {Kafka, logLevel}  from 'kafkajs';


const KAFKA_BROKER_ADDRESS = 'localhost:9092';


export class KafkaLogger implements AbstractLogger {
    kafka_: Kafka;
    producer_: any;

    constructor(kafka: Kafka) {
        this.kafka_ = kafka;
        this.producer_ = kafka.producer();
        this.producer_.connect().then(() => {
            console.log('Connected to Kafka');
        });
    }

    Log(entity: AbstractEntity): void {
        let topic = entity.getName();
        console.log("Sending a message to the topic " + topic);
        this.producer_.connect().then(()=>{
            this.producer_.send({
                topic: topic,
                messages: [
                    { value: JSON.stringify(entity) },
                ],
            }).then(() => {
                console.log('Successfully sent message on topic ' + topic);
            });
        });
    }
}

export function createKafkaLogger(): KafkaLogger {
    console.log("Creating a kafka logger");
    const kafka = new Kafka({
        brokers: [KAFKA_BROKER_ADDRESS],
        logLevel: logLevel.INFO,
    });
    return new KafkaLogger(kafka);
}