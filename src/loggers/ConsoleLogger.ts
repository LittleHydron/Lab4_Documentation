import { AbstractEntity } from "../../interfaces/entities/AbstractEntity";

import { AbstractLogger } from "../../interfaces/loggers/AbstractLogger";

export class ConsoleLogger implements AbstractLogger {
    Log(entity: AbstractEntity): void {
        console.log(JSON.stringify(entity));
    }
}