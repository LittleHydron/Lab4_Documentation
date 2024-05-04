import { AbstractLogger } from "../../interfaces/loggers/AbstractLogger";

export class ConsoleLogger implements AbstractLogger {
    Log(entity: any): void {
        console.log(entity);
    }
}