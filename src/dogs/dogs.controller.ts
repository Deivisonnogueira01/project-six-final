import { CreateDogDTO } from './dto/dogs.dto';
import { DogsService } from './dogs.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Get()
  showMessage(): string {
    return 'The Dog is on the Table';
  }

  @Get('/list')
  findAll(): CreateDogDTO[] {
    return this.dogsService.findAll();
  }

  @Get('/:id')
  findDog(@Param('id') id: string) {
    return this.dogsService.findOne(id);
  }

  @Post()
  createNewDog(@Body() dog: CreateDogDTO): string {
    this.dogsService.create(dog);
    return 'A New Dog was Created';
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() dog: CreateDogDTO) {
    return this.dogsService.update(id, dog);
  }

  @Delete('/:id')
  delete(@Param('id') id: string): string {
    this.dogsService.remove(id);
    return 'The Dog was Removed';
  }
}