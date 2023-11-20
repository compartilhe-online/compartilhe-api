import { Module } from '@nestjs/common';
import { CampaignsTypesService } from './campaigns-types.service';
import { CampaignsTypesController } from './campaigns-types.controller';

@Module({
  controllers: [CampaignsTypesController],
  providers: [CampaignsTypesService],
})
export class CampaignsTypesModule {}
