import { CreateCatDTO } from './dto/cats.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private cats: CreateCatDTO[] = [];

  create(cat: CreateCatDTO) {
    this.cats.push(cat);
  }

  findAll(): CreateCatDTO[] {
    return this.cats;
  }

  findOne(id: string) {
    return this.cats.filter((obj: CreateCatDTO) => obj.id === id);
  }

  remove(id: string) {
    const cats_remove = this.cats.filter((obj: CreateCatDTO) => obj.id != id);
    this.cats = cats_remove;
  }

  update(id: string, createCatDTO: CreateCatDTO) {
    this.cats.map((obj: CreateCatDTO) => {
      if (obj.id === id) {
        obj.name = createCatDTO.name;
        obj.age = createCatDTO.age;
      }
    });
    return this.findOne(id);
  }
}