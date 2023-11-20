import { PartialType } from '@nestjs/mapped-types';
import { CreateCampaignsTestimonialDto } from './create-campaigns-testimonial.dto';

export class UpdateCampaignsTestimonialDto extends PartialType(
  CreateCampaignsTestimonialDto,
) {}
