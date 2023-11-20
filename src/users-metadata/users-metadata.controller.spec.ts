import { Test, TestingModule } from '@nestjs/testing';
import { UsersMetadataController } from './users-metadata.controller';
import { UsersMetadataService } from './users-metadata.service';

describe('UsersMetadataController', () => {
  let controller: UsersMetadataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersMetadataController],
      providers: [UsersMetadataService],
    }).compile();

    controller = module.get<UsersMetadataController>(UsersMetadataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
