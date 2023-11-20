import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CampaignsTypesService } from './campaigns-types.service';
import { CreateCampaignsTypeDto } from './dto/create-campaigns-type.dto';
import { UpdateCampaignsTypeDto } from './dto/update-campaigns-type.dto';

@Controller('campaigns-types')
export class CampaignsTypesController {
  constructor(private readonly CampaignsTypesService: CampaignsTypesService) {}

  @Post()
  create(@Body() createCampaignsTypesDto: CreateCampaignsTypeDto) {
    return this.CampaignsTypesService.create(createCampaignsTypesDto);
  }

  @Get()
  findAll() {
    return this.CampaignsTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.CampaignsTypesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCampaignsTypeDto: UpdateCampaignsTypeDto,
  ) {
    return this.CampaignsTypesService.update(+id, updateCampaignsTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.CampaignsTypesService.remove(+id);
  }
}
