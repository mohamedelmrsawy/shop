import { TypeOrmModule } from '@nestjs/typeorm';

export const typeOrmConfiger = TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.DB_HOST ?? 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'M@hamed 1234',
  database: 'shop',
  synchronize: true,
  autoLoadEntities: true,
});
