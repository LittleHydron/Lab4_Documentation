import { AbstractEntity } from "./AbstractEntity";

export interface UserEntityInterface extends AbstractEntity{
    id: number;
    firstName: string;
    lastName: string;
}