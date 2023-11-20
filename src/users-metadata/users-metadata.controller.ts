import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UsersMetadataService } from './users-metadata.service';
import { CreateUsersMetadatumDto } from './dto/create-users-metadatum.dto';
import { UpdateUsersMetadatumDto } from './dto/update-users-metadatum.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users-metadata')
export class UsersMetadataController {
  constructor(private readonly usersMetadataService: UsersMetadataService) {}
}
