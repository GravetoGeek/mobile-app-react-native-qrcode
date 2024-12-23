import {IbarcodeRepository} from '@/barcode/core/domain/ports/barcode.repository';
import {barcodePrismaAdapter} from '@/barcode/driving-adapters/services/barcode-prisma-adapter';
import {BarcodeService} from '@/barcode/driving-adapters/services/barcode.service';
import {Provider} from '@nestjs/common';

/**
 * Exemplo de Provider que conecta a interface IbarcodeRepository
 * com a implementação barcodePrismaAdapter.
 */
export const barcodeProvider: Provider[] = [
  {
    provide: 'IbarcodeRepository',
    useClass: barcodePrismaAdapter,
  },
  {
    provide: BarcodeService,
    useFactory: (repo: IbarcodeRepository) => {
      return new BarcodeService(repo);
    },
    inject: ['IbarcodeRepository'],
  },
];
