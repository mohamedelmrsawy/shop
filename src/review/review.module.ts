import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewResolver } from './review.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';

@Module({
  providers: [ReviewResolver, ReviewService],
  imports: [TypeOrmModule.forFeature([Review])],
})
export class ReviewModule {}
