import {CreateBarcodeDto} from '@/barcode/driving-adapters/dtos/create-barcode.dto';
import {UpdateBarcodeDto} from '@/barcode/driving-adapters/dtos/update-barcode.dto';
import {BarcodeService} from '@/barcode/driving-adapters/services/barcode.service';
import {
    Body,
    Controller,
    Delete,
    Get,
    Inject,
    NotFoundException,
    Param,
    Patch,
    Post,
} from '@nestjs/common';

/**
 * A Controller atua como um "driving adapter" (HTTP).
 * Ele recebe requisições HTTP e repassa a lógica para o service do módulo
 * ou para os casos de uso no core, conforme necessário.
 */
@Controller('qrcodes')
export class BarcodeController {
    constructor(
        @Inject(BarcodeService) private readonly barcodeService: BarcodeService,
    ) {}

    @Post()
    async create(@Body() dto: CreateBarcodeDto) {
        return this.barcodeService.createBarcode(dto);
    }

    @Get()
    async findAll() {
        return this.barcodeService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const qrCode=await this.barcodeService.findOne(id);
        if(!qrCode) {
            throw new NotFoundException('QR Code not found');
        }
        return qrCode;
    }

    @Patch(':id')
    async update(@Param('id') id: string,@Body() dto: UpdateBarcodeDto) {
        return this.barcodeService.updateBarcode(id,dto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.barcodeService.deleteBarcode(id);
    }
}
