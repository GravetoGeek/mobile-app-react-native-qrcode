import {barcodeType} from "@prisma/client";
import {JsonValue} from "@prisma/client/runtime/library";

export class barcodeEntity {
  id: string;
  type: barcodeType;
  data: JsonValue;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<barcodeEntity>) {
    Object.assign(this, partial);
    this.createdAt = partial.createdAt ?? new Date();
    this.updatedAt = partial.updatedAt ?? new Date();
  }
}
