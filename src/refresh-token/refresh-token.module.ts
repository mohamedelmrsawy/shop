import { Module } from '@nestjs/common';
import { RefreshTokenService } from './refresh-token.service';
import { RefreshTokenResolver } from './refresh-token.resolver';

@Module({
  providers: [RefreshTokenResolver, RefreshTokenService],
})
export class RefreshTokenModule {}
