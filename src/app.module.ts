/* eslint-disable prettier/prettier */
import { Dog } from './dogs/entity/create.dog';
import { Cat } from './cats/entity/create.cat';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';

@Module({
  imports: [
    CatsModule,
    DogsModule,
    TypeOrmModule.forRoot({

      //CONNECTION :
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'animals',
      entities: [Cat, Dog],
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}