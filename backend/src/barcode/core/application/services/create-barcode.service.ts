import {barcodeEntity} from '@/barcode/core/domain/entities/barcode.entity';
import {IbarcodeRepository} from '@/barcode/core/domain/ports/barcode.repository';
import {Injectable} from '@nestjs/common';
import {
    CreateBarcodeInput,
    CreateBarcodeUseCase,
} from '../../domain/ports/create-barcode.usecase';

@Injectable()
export class CreateQRCodeService implements CreateBarcodeUseCase {
    constructor(private readonly qrCodeRepository: IbarcodeRepository) {}

    async execute(data: CreateBarcodeInput): Promise<barcodeEntity> {
        const qrCode=new barcodeEntity({data: data.data});
        return this.qrCodeRepository.create(qrCode);
    }
}
