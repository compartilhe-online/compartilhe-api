import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersMetadatumDto } from './create-users-metadatum.dto';

export class UpdateUsersMetadatumDto extends PartialType(CreateUsersMetadatumDto) {}
