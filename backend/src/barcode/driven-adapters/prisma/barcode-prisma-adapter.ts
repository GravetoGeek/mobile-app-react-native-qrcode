import {barcodeEntity} from '@/barcode/core/domain/entities/barcode.entity';
import {IbarcodeRepository} from '@/barcode/core/domain/ports/barcode.repository';
import {PrismaService} from '@/database/database.module';
import {Injectable} from '@nestjs/common';

@Injectable()
export class barcodePrismaAdapter implements IbarcodeRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(barcode: barcodeEntity) {
        return this.prisma.barcode.create({data: {
            type: barcode.type,
            data: barcode.data
        }});
    }

    async findAll() {
        return this.prisma.barcode.findMany();
    }

    async findById(id: string) {
        return this.prisma.barcode.findUnique({where: {id}});
    }

    async update(id: string,barcode: Partial<barcodeEntity>) {
        return this.prisma.barcode.update({where: {id},data:barcode});
    }

    async delete(id: string) {
        await this.prisma.barcode.delete({where: {id}});
    }
}
