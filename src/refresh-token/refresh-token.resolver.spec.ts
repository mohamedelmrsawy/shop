import { Test, TestingModule } from '@nestjs/testing';
import { RefreshTokenResolver } from './refresh-token.resolver';
import { RefreshTokenService } from './refresh-token.service';

describe('RefreshTokenResolver', () => {
  let resolver: RefreshTokenResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RefreshTokenResolver, RefreshTokenService],
    }).compile();

    resolver = module.get<RefreshTokenResolver>(RefreshTokenResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
