import { Test, TestingModule } from '@nestjs/testing';
import { CampaignsTestimonialsService } from './campaigns-testimonials.service';

describe('CampaignsTestimonialsService', () => {
  let service: CampaignsTestimonialsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaignsTestimonialsService],
    }).compile();

    service = module.get<CampaignsTestimonialsService>(
      CampaignsTestimonialsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
