import {Test,TestingModule} from '@nestjs/testing';
import {barcodeEntity} from './barcode.entity';

describe('Qrcode', () => {
  let provider: barcodeEntity;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [barcodeEntity],
    }).compile();

    provider = module.get<barcodeEntity>(barcodeEntity);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
