import { PartialType } from '@nestjs/mapped-types';
import { Campaign } from '../entities/campaign.entity';

export class CreateCampaignDto extends PartialType(Campaign) {}
