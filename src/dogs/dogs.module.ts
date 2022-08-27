/* eslint-disable prettier/prettier */
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';

import { Dog } from './entity/create.dog';

@Module({
  imports: [TypeOrmModule.forFeature([Dog])], 
  controllers: [DogsController],
  providers: [DogsService], 
})
export class DogsModule {}

//install typeorm
// prettier