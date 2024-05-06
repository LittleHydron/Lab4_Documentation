import { AbstractEntity } from "./AbstractEntity";

export interface RoomEntityInterface extends AbstractEntity {
    id: number;
    hotelId: number;
    number: number;
    isAvailable: boolean;
}