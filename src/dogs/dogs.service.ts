import { CreateDogDTO } from './dto/dogs.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
  private dogs: CreateDogDTO[] = [];

  create(dog: CreateDogDTO) {
    this.dogs.push(dog);
  }

  findAll(): CreateDogDTO[] {
    return this.dogs;
  }

  findOne(id: string) {
    return this.dogs.filter((obj: CreateDogDTO) => obj.id === id);
  }

  remove(id: string) {
    const dogs_remove = this.dogs.filter((obj: CreateDogDTO) => obj.id !== id);
    this.dogs = dogs_remove;
  }

  update(id: string, createDogDTO: CreateDogDTO) {
    this.dogs.map((obj: CreateDogDTO) => {
      if (obj.id === id) {
        obj.name = createDogDTO.name;
        obj.age = createDogDTO.age;
      }
    });
    return this.findOne(id);
  }
}