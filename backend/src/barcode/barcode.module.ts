import {BarcodeController} from '@/barcode/driving-adapters/controllers/barcode.controller';
import {BarcodeService} from '@/barcode/driving-adapters/services/barcode.service';
import {PrismaService} from '@/database/database.module';
import {Module} from '@nestjs/common';
import {barcodePrismaAdapter} from './driving-adapters/services/barcode-prisma-adapter';
import {barcodeProvider} from './providers/barcode.provider';

@Module({
    providers: [
        {
            provide: 'IbarcodeRepository',
            useClass: barcodePrismaAdapter,
        },
        BarcodeService,
        PrismaService,
        ...barcodeProvider
    ],
    controllers: [BarcodeController],
    exports:[BarcodeService]
})
export class BarcodeModule {}
export {barcodePrismaAdapter,BarcodeService};

