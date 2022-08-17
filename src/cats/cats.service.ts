
import { Inject, Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CreateCat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  private cats: CreateCatDto[] = [];

     constructor(
        @Inject('CATS_REPOSITORY')
        private catsRepository : Repository<CreateCat>;
     ){}

  create(cat: CreateCatDto) {
    this.cats.push(cat);
    this.catsRepository.save();
  }

  findAll(): Promise<CreateCat[]> {
    return this.catsRepository.find();
  }

  findOne(id: string) {
    return this.cats.filter((obj: CreateCatDto) => obj.id === id);
  }

  remove(id: string) {
    const cats_remove = this.cats.filter((obj: CreateCatDto) => obj.id != id);
    this.cats = cats_remove;
  }

  update(id: string, createCatDTO: CreateCatDto) {
    this.cats.map((obj: CreateCatDto ) => {
      if (obj.id === id) {
        obj.name = createCatDTO.name;
        obj.age = createCatDTO.age;
      }
    });
    return this.findOne(id);
  }
}