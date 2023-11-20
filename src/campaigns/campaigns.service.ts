import { Injectable } from '@nestjs/common';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { Campaign } from './entities/campaign.entity';
import { UserRequest } from 'src/types/user.request';

@Injectable()
export class CampaignsService {
  async create(createCampaignDto: CreateCampaignDto, request: UserRequest) {
    createCampaignDto.user = request.user;

    return Campaign.create(createCampaignDto).save();
  }

  async findAll() {
    return Campaign.find({
      relations: ['user', 'testimonial', 'type'],
      order: { createdAt: 'DESC' },
    });
  }

  findOne(id: number) {
    return Campaign.findOne({
      where: { id },
      relations: ['user', 'testimonial', 'type'],
    });
  }

  update(id: number, updateCampaignDto: UpdateCampaignDto) {
    return `This action updates a #${id} campaign`;
  }

  remove(id: number) {
    return `This action removes a #${id} campaign`;
  }
}
