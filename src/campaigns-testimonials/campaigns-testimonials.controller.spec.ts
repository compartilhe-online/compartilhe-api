import { Test, TestingModule } from '@nestjs/testing';
import { CampaignsTestimonialsController } from './campaigns-testimonials.controller';
import { CampaignsTestimonialsService } from './campaigns-testimonials.service';

describe('CampaignTestimonialController', () => {
  let controller: CampaignsTestimonialsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampaignsTestimonialsController],
      providers: [CampaignsTestimonialsService],
    }).compile();

    controller = module.get<CampaignsTestimonialsController>(
      CampaignsTestimonialsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
