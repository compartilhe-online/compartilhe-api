import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
  UseGuards,
  Req,
  Query,
  UploadedFiles,
  Delete,
  Param,
  Get,
  Response,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { UserRequest } from 'src/types/user.request';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  @UseInterceptors(AnyFilesInterceptor())
  upload(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Query() query,
    @Req() req: UserRequest,
  ) {
    return this.uploadService.upload(files, query, req);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete()
  delete(@Query() query, @Req() req: UserRequest) {
    return this.uploadService.delete(req, query);
  }
}
