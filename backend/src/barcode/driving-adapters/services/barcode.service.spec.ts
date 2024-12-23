import {Test,TestingModule} from '@nestjs/testing';
import {BarcodeService} from './barcode.service';

describe('QrcodeService', () => {
  let service: BarcodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BarcodeService],
    }).compile();

    service = module.get<BarcodeService>(BarcodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
