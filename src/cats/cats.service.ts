import { Cat } from './entity/create.cat';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}

  create(cat: Cat): void {
    this.catsRepository.save(cat);
  }

  async findAll(): Promise<Cat[]> {
    return await this.catsRepository.find();
  }

  async findOne(id: string): Promise<Cat> {
    return await this.catsRepository.findOneBy({ id });
  }

  async remove(id: string) {
    return await this.catsRepository.delete({ id });
  }

  async update(catId: string, cat: Cat): Promise<Cat> {
    this.catsRepository.update(
      {
        id: catId,
      },
      {
        name: cat.name,
        age: cat.age,
      },
    );
    return this.findOne(catId);
  }
}