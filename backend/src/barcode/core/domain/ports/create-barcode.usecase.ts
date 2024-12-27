import {barcodeEntity} from '@/barcode/core/domain/entities/barcode.entity';
import {barcodeType} from '@prisma/client';

export interface CreateBarcodeUseCase {
    execute(data: CreateBarcodeInput): Promise<barcodeEntity>;
}

export interface CreateBarcodeInput {
    type: barcodeType;
    data: string;
}
