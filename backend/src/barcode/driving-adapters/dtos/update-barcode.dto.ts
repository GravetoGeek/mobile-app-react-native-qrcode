import {barcodeType} from '@prisma/client';
import {JsonValue} from '@prisma/client/runtime/library';
import {IsEnum,IsJSON,IsOptional,MinLength} from 'class-validator';

export class UpdateBarcodeDto {
  @IsOptional()
  @IsEnum(barcodeType,{message: 'O tipo deve ser um dos valores permitidos pelo Prisma.'})
  type?: barcodeType;
//   @IsString({message: 'O campo "data" deve ser um json string.'})
  @IsOptional()
  @MinLength(1,{message: 'O campo "data" não pode ser vazio.'})
  @IsJSON({message: 'O campo "data" deve ser um json string.'})
  data?: JsonValue;
}
