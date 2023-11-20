import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CampaignsTestimonialsService } from './campaigns-testimonials.service';
import { CreateCampaignsTestimonialDto } from './dto/create-campaigns-testimonial.dto';
import { UpdateCampaignsTestimonialDto } from './dto/update-campaigns-testimonial.dto';

@Controller('campaigns-testimonials')
export class CampaignsTestimonialsController {
  constructor(
    private readonly campaignsTestimonialsService: CampaignsTestimonialsService,
  ) {}

  @Post()
  create(@Body() createCampaignTestimonialDto: CreateCampaignsTestimonialDto) {
    return this.campaignsTestimonialsService.create(
      createCampaignTestimonialDto,
    );
  }

  @Get()
  findAll() {
    return this.campaignsTestimonialsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.campaignsTestimonialsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCampaignsTestimonialDto: UpdateCampaignsTestimonialDto,
  ) {
    return this.campaignsTestimonialsService.update(
      +id,
      updateCampaignsTestimonialDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.campaignsTestimonialsService.remove(+id);
  }
}
