import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { UsersMetadataModule } from 'src/users-metadata/users-metadata.module';

@Module({
  imports: [UsersMetadataModule],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
