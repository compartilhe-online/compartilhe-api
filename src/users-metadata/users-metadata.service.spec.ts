import { Test, TestingModule } from '@nestjs/testing';
import { UsersMetadataService } from './users-metadata.service';

describe('UsersMetadataService', () => {
  let service: UsersMetadataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersMetadataService],
    }).compile();

    service = module.get<UsersMetadataService>(UsersMetadataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
