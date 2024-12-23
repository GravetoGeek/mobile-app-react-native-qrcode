import {barcodeEntity} from '@/barcode/core/domain/entities/barcode.entity';
import {IbarcodeRepository} from '@/barcode/core/domain/ports/barcode.repository';
import {Inject,Injectable,NotFoundException} from '@nestjs/common';
import {CreateBarcodeDto} from '../dtos/create-barcode.dto';
import {UpdateBarcodeDto} from '../dtos/update-barcode.dto';

@Injectable()
export class BarcodeService {
    constructor(
        @Inject('IbarcodeRepository')
        private readonly barcodeRepository: IbarcodeRepository
    ) {}

    async createBarcode(dto: CreateBarcodeDto): Promise<barcodeEntity> {
        const newBarcode=new barcodeEntity(dto);
        return this.barcodeRepository.create(newBarcode);
    }

    async findAll(): Promise<barcodeEntity[]> {
        return this.barcodeRepository.findAll();
    }

    async findOne(id: string): Promise<barcodeEntity|null> {
        return this.barcodeRepository.findById(id);
    }

    async updateBarcode(id: string,dto: UpdateBarcodeDto): Promise<barcodeEntity> {
        const existing=await this.findOne(id);
        if(!existing) {
            throw new NotFoundException(`QR Code with id ${id} not found`);
        }
        return this.barcodeRepository.update(id,dto);
    }

    async deleteBarcode(id: string): Promise<void> {
        const existing=await this.findOne(id);
        if(!existing) {
            throw new NotFoundException(`QR Code with id ${id} not found`);
        }
        await this.barcodeRepository.delete(id);
    }
}
