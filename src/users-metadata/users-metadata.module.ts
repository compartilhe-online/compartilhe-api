import { Module } from '@nestjs/common';
import { UsersMetadataService } from './users-metadata.service';
import { UsersMetadataController } from './users-metadata.controller';
// import { RedisModule } from '../../core/redis/redis.module';
// import { RabbitmqModule } from 'src/core/rabbitmq/rabbitmq.module';
// import { UsersContactsModule } from '../users-contacts/users-contacts.module';

@Module({
  controllers: [UsersMetadataController],
  providers: [UsersMetadataService],
  exports: [UsersMetadataService],
})
export class UsersMetadataModule {}
