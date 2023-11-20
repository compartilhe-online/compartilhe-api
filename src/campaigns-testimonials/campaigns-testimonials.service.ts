import { Injectable } from '@nestjs/common';
import { CreateCampaignsTestimonialDto } from './dto/create-campaigns-testimonial.dto';
import { UpdateCampaignsTestimonialDto } from './dto/update-campaigns-testimonial.dto';

@Injectable()
export class CampaignsTestimonialsService {
  create(createCampaignsTestimonialDto: CreateCampaignsTestimonialDto) {
    return 'This action adds a new campaignTestimonial';
  }

  findAll() {
    return `This action returns all campaignTestimonial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} campaignTestimonial`;
  }

  update(
    id: number,
    updateCampaignsTestimonialDto: UpdateCampaignsTestimonialDto,
  ) {
    return `This action updates a #${id} campaignTestimonial`;
  }

  remove(id: number) {
    return `This action removes a #${id} campaignTestimonial`;
  }
}
