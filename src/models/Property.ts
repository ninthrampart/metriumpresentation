import { Housing } from "./Housing";

export class Property {
    mtr_rooms?: number;
    statuscode: string;
    mtr_housingid: Housing;
    mtr_sectionnumber?: string;
    mtr_floor?: number;
    mtr_furnish_level?: string;
    mtr_layout?: string;
    mtr_price?: number;
    mtr_cost?: number;
    mtr_quantity?: number;

    constructor(statuscode: string, housing: Housing){
        this.statuscode = statuscode;
        this.mtr_housingid = housing;
    }
}