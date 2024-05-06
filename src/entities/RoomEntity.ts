import { RoomEntityInterface } from "../../interfaces/entities/RoomEntityInterface";

export class RoomEntity implements RoomEntityInterface {
    id: number;

    hotelId: number;

    number: number;

    isAvailable: boolean;

    static getName(): string {
        return "room";
    }
    
    getName(): string {
        return "room";
    }

    constructor(room: Partial<RoomEntity>) {
        Object.assign(this, room);
    }
}