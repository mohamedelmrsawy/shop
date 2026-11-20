import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RefreshTokenService } from './refresh-token.service';
import { RefreshToken } from './entities/refresh-token.entity';
import { CreateRefreshTokenInput } from './dto/create-refresh-token.input';
import { UpdateRefreshTokenInput } from './dto/update-refresh-token.input';

@Resolver(() => RefreshToken)
export class RefreshTokenResolver {
  constructor(private readonly refreshTokenService: RefreshTokenService) {}

  @Mutation(() => RefreshToken)
  createRefreshToken(@Args('createRefreshTokenInput') createRefreshTokenInput: CreateRefreshTokenInput) {
    return this.refreshTokenService.create(createRefreshTokenInput);
  }

  @Query(() => [RefreshToken], { name: 'refreshToken' })
  findAll() {
    return this.refreshTokenService.findAll();
  }

  @Query(() => RefreshToken, { name: 'refreshToken' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.refreshTokenService.findOne(id);
  }

  @Mutation(() => RefreshToken)
  updateRefreshToken(@Args('updateRefreshTokenInput') updateRefreshTokenInput: UpdateRefreshTokenInput) {
    return this.refreshTokenService.update(updateRefreshTokenInput.id, updateRefreshTokenInput);
  }

  @Mutation(() => RefreshToken)
  removeRefreshToken(@Args('id', { type: () => Int }) id: number) {
    return this.refreshTokenService.remove(id);
  }
}
