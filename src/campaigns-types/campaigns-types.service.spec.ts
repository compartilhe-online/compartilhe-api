import { Test, TestingModule } from '@nestjs/testing';
import { CampaignsTypesService } from './campaigns-types.service';

describe('CampaignsTypesService', () => {
  let service: CampaignsTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaignsTypesService],
    }).compile();

    service = module.get<CampaignsTypesService>(CampaignsTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
