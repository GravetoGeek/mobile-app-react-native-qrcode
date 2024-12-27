import {ApiProperty,OmitType} from '@nestjs/swagger';
import {barcodeType} from '@prisma/client';
import {IsEnum,IsString,MinLength} from 'class-validator';
import {BarcodeDTO} from './barcode.dto';

export class CreateBarcodeDto extends OmitType(BarcodeDTO,['id','createdAt','updatedAt']) {
    @IsEnum(barcodeType,{message: 'O tipo deve ser um dos valores permitidos pelo Prisma.'})
    @ApiProperty({
        enum: barcodeType,
        description: 'Tipo do QR Code',
        examples: [
            barcodeType.aztec,
            barcodeType.code_128,
            barcodeType.code_39,
            barcodeType.code_93,
            barcodeType.data_matrix,
            barcodeType.ean_13,
            barcodeType.ean_8,
            barcodeType.itf,
            barcodeType.pdf_417,
            barcodeType.upc_a,
            barcodeType.upc_e,
        ],
        required: true,
    })
    type: barcodeType;
    @IsString({ message: 'O campo "data" deve ser uma string.' })
    @MinLength(1,{message: 'O campo "data" não pode ser vazio.'})
    @ApiProperty({
        description: 'Dados do QR Code',
        required: true,
    })
    data: string;
}
