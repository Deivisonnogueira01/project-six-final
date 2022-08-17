import { CreateCatDTO } from './dto/cats.dto';
import { Inject, Injectable } from '@nestjs/common';
import { CreateCat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  private cats: CreateCatDTO[] = [];

     constructor(
        @Inject('CATS_REPOSITORY')
        private catsRepository : Repository<CreateCat>;
     ){}

  create(cat: CreateCatDTO) {
    this.cats.push(cat);
  }

  findAll(): Promise<CreateCat[]> {
    return this.catsRepository.find();
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