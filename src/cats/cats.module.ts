/* eslint-disable prettier/prettier */
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

import { Cat } from './entity/create.cat';

@Module({
  imports: [TypeOrmModule.forFeature([Cat])], // DatabaseModule
  controllers: [CatsController],
  providers: [CatsService], // [...catsProviders, CatsService]
})
export class CatsModule {
  
}

// install typeOrm