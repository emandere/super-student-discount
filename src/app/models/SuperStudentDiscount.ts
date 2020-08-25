export class SuperStudentDiscount
{
    state:string;
    driverage:number;
    drivereligiblegpa:number;
    drivermediumgpa:number;
    driverhighgpa:number;
    discountmediumamount:number;
    discounthighamount:number;
}


export class Discounts {
    discounts: SuperStudentDiscount[];
}


export interface UpdateDiscountResponse {
    status: string;
}
