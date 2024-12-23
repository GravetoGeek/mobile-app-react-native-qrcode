import {Test,TestingModule} from '@nestjs/testing';
import {BarcodeController} from './barcode.controller';

describe('QrcodeController', () => {
  let controller: BarcodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BarcodeController],
    }).compile();

    controller = module.get<BarcodeController>(BarcodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
