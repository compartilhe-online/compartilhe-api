import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CampaignsModule } from './campaigns/campaigns.module';
import { CampaignsTestimonialsModule } from './campaigns-testimonials/campaigns-testimonials.module';
import { MessageModule } from './message/message.module';
import { AuthModule } from './auth/auth.module';
import { CampaignsTypesModule } from './campaigns-types/campaigns-types.module';
import { AwsSdkModule } from 'nest-aws-sdk';
import { S3 } from 'aws-sdk';
import { UploadModule } from './upload/upload.module';
import { UsersMetadataModule } from './users-metadata/users-metadata.module';
import { NewsletterModule } from './newsletter/newsletter.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: ['dist/**/*.entity{ .ts,.js}'],
      synchronize: true,
    }),
    AwsSdkModule.forRoot({
      defaultServiceOptions: {
        region: process.env.AWS_REGION,
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
      },
      services: [S3],
    }),
    UsersModule,
    CampaignsModule,
    CampaignsTestimonialsModule,
    MessageModule,
    AuthModule,
    CampaignsTypesModule,
    UploadModule,
    UsersMetadataModule,
    NewsletterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
