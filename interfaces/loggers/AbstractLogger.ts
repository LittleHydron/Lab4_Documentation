import { AbstractEntity } from "../entities/AbstractEntity";

export interface AbstractLogger {
    Log(message: AbstractEntity): void;
}