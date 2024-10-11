import { Movie } from 'src/entities/movie-entity';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { MovieController } from './controllers/movie-controller';
import { MovieService } from './services/movie-service';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [
        Movie
      ],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Movie])
  ],
  controllers: [MovieController],
  providers: [MovieService],
})
export class AppModule { }
