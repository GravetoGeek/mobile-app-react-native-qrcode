import {barcodeType} from "@prisma/client";

export class BarcodeDTO {
    id?: string;
    type?: barcodeType;
    data: string;
    createdAt?: Date;
    updatedAt?: Date;

    constructor(id:string,type: barcodeType, data: string, createdAt: Date,updatedAt: Date) {
        this.id = id;
        this.type = type;
        this.data = data;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
