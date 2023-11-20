import { Injectable } from '@nestjs/common';
import { CreateCampaignsTypeDto } from './dto/create-campaigns-type.dto';
import { UpdateCampaignsTypeDto } from './dto/update-campaigns-type.dto';
import { CampaignType } from './entities/campaign-type.entity';

@Injectable()
export class CampaignsTypesService {
  create(createCampaignTypeDto: CreateCampaignsTypeDto) {
    return 'This action adds a new campaignType';
  }

  findAll() {
    return CampaignType.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} campaignType`;
  }

  update(id: number, updateCampaignTypeDto: UpdateCampaignsTypeDto) {
    return `This action updates a #${id} campaignType`;
  }

  remove(id: number) {
    return `This action removes a #${id} campaignType`;
  }
}
