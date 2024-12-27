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
import {ApiOkResponse,ApiOperation} from '@nestjs/swagger';
import {barcodeType} from '@prisma/client';

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
    @ApiOperation({summary: 'Criar um novo QR Code'})
    @ApiOkResponse({ type: CreateBarcodeDto })
    async create(@Body() dto: CreateBarcodeDto) {
        return this.barcodeService.createBarcode(dto);
    }

    @Get()
    @ApiOperation({summary: 'Listar todos os QR Codes'})
    @ApiOkResponse({ type: [CreateBarcodeDto] })
    async findAll() {
        return this.barcodeService.findAll();
    }

    @Get(':id')
    @ApiOperation({summary: 'Buscar um QR Code pelo ID'})
    @ApiOkResponse({ type: CreateBarcodeDto })
    async findOne(@Param('id') id: string) {
        const qrCode=await this.barcodeService.findOne(id);
        if(!qrCode) {
            throw new NotFoundException('QR Code not found');
        }
        return qrCode;
    }

    @Patch(':id')
    @ApiOperation({summary: 'Atualizar um QR Code pelo ID'})
    @ApiOkResponse({ type: CreateBarcodeDto })
    async update(@Param('id') id: string,@Body() dto: UpdateBarcodeDto) {
        return this.barcodeService.updateBarcode(id,dto);
    }

    @Delete(':id')
    @ApiOperation({summary: 'Deletar um QR Code pelo ID'})
    @ApiOkResponse({ type: CreateBarcodeDto })
    async delete(@Param('id') id: string) {
        return this.barcodeService.deleteBarcode(id);
    }
}
