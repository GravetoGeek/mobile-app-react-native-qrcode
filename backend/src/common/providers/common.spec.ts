import { Test, TestingModule } from '@nestjs/testing';
import { Common } from './common';

describe('Common', () => {
  let provider: Common;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Common],
    }).compile();

    provider = module.get<Common>(Common);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
