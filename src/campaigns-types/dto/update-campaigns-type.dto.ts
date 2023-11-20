import { PartialType } from '@nestjs/mapped-types';
import { CreateCampaignsTypeDto } from './create-campaigns-type.dto';

export class UpdateCampaignsTypeDto extends PartialType(
  CreateCampaignsTypeDto,
) {}
