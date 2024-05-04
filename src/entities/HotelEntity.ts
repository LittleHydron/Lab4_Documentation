import { HotelEntityInterface } from "../../interfaces/entities/HotelEntityInterface";

export class HotelEntity implements HotelEntityInterface {
    id: number;
    
    name: string;

    static getName(): string {
        return "hotel";
    }

    constructor(hotel: Partial<HotelEntity>) {
        Object.assign(this, hotel);
    }
}