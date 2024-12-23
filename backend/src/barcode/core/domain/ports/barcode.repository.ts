import {barcodeEntity} from '../entities/barcode.entity';

export interface IbarcodeRepository {
  create(qrCode: barcodeEntity): Promise<barcodeEntity>;
  update(id: string, qrCode: Partial<barcodeEntity>): Promise<barcodeEntity>;
  findById(id: string): Promise<barcodeEntity | null>;
  delete(id: string): Promise<void>;
  findAll(): Promise<barcodeEntity[]>;
}
