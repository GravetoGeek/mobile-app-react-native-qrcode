import {barcodeType} from "@prisma/client";
export class barcodeEntity {
    id: string;
    type: barcodeType;
    data: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(partial: Partial<barcodeEntity>) {
        Object.assign(this,partial);
        this.createdAt=partial.createdAt??new Date();
        this.updatedAt=partial.updatedAt??new Date();
    }
}
