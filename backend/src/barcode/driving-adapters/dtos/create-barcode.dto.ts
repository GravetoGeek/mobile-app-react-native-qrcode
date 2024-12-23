import {barcodeType} from '@prisma/client';
import {JsonValue} from '@prisma/client/runtime/library';
import {IsEnum,IsJSON,MinLength} from 'class-validator';

export class CreateBarcodeDto {
    @IsEnum(barcodeType,{message: 'O tipo deve ser um dos valores permitidos pelo Prisma.'})
    type: barcodeType;
    @MinLength(1,{message: 'O campo "data" não pode ser vazio.'})
    @IsJSON({ message: 'O campo "data" deve ser um JSON válido ou uma string representando um JSON válido.' })
    data: JsonValue;
}
