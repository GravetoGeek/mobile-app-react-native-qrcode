import {barcodeEntity} from '@/barcode/core/domain/entities/barcode.entity';

export interface CreateBarcodeUseCase {
  execute(data: CreateBarcodeInput): Promise<barcodeEntity>;
}

export interface CreateBarcodeInput {
    type: string;
    data: string;
}
