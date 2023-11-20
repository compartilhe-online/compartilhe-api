import { Test, TestingModule } from '@nestjs/testing';
import { CampaignsTypesController } from './campaigns-types.controller';
import { CampaignsTypesService } from './campaigns-types.service';

describe('CampaignsTypesController', () => {
  let controller: CampaignsTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampaignsTypesController],
      providers: [CampaignsTypesService],
    }).compile();

    controller = module.get<CampaignsTypesController>(CampaignsTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
