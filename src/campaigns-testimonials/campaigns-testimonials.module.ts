import { Module } from '@nestjs/common';
import { CampaignsTestimonialsService } from './campaigns-testimonials.service';
import { CampaignsTestimonialsController } from './campaigns-testimonials.controller';

@Module({
  controllers: [CampaignsTestimonialsController],
  providers: [CampaignsTestimonialsService],
})
export class CampaignsTestimonialsModule {}
