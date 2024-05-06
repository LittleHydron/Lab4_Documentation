import { UserEntityInterface } from "../../interfaces/entities/UserEntityInterface";

export class UserEntity implements UserEntityInterface{
    id: number;

    firstName: string;

    lastName: string;

    static getName(): string {
        return "user";
    }
    
    getName(): string {
        return "user";
    }

    constructor(user: Partial<UserEntity>) {
        Object.assign(this, user);
    }
}