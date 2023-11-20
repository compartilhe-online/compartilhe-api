import {
  Logger,
  Injectable,
  HttpException,
  HttpStatus,
  Body,
  StreamableFile,
} from '@nestjs/common';
import { InjectAwsService } from 'nest-aws-sdk';
import { S3 } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import { UsersMetadataService } from '../users-metadata/users-metadata.service';
import { createReadStream } from 'fs';
import { join } from 'path';
const AmazonS3URI = require('amazon-s3-uri');
@Injectable()
export class UploadService {
  constructor(
    @InjectAwsService(S3) private readonly s3: S3,
    private configService: ConfigService,
    private usersMetadataService: UsersMetadataService,
  ) {}

  private date = new Date();

  async upload(files, query, request) {
    const bucket = this.configService.get('AWS_IMG_BUCKET');

    if (!files || files.length < 1) {
      throw new HttpException(
        'É necessário anexar ao menos um arquivo.',
        HttpStatus.CONFLICT,
      );
    }

    let response = [];
    try {
      for (let file of files) {
        let filename =
          Math.random().toString(36).slice(2) +
          '-' +
          Math.round(Date.now() / 1000).toString() +
          '.' +
          file.originalname.split('.')[1];

        let uploads3 = await this.s3
          .upload({
            Bucket: bucket,
            Key: `${this.date.getUTCFullYear()}/${this.date.getUTCMonth()}/${filename}`,
            Body: file.buffer,
            ACL: 'public-read',
            ContentType: file.mimetype,
          })
          .promise();

        response.push(uploads3.Location);
      }
    } catch (e) {
      Logger.error(e);
    }

    await this.usersMetadataService.saveUpload(request, response);

    return response;
  }

  async delete(request, query) {
    try {
      const meta = await this.usersMetadataService.getUserUploads(
        request.user.id,
      );
      const { region, bucket, key } = AmazonS3URI(query.file);

      if (meta.value.find((e) => e == query.file)) {
        await this.s3
          .deleteObjects({
            Bucket: bucket,
            Delete: {
              Objects: [{ Key: key }],
              Quiet: false,
            },
          })
          .promise();
      } else {
        throw new Error('Arquivo não encontrado.');
      }
    } catch (e) {
      Logger.error(e);
      throw new HttpException(e.message, HttpStatus.CONFLICT);
    }
  }
}
