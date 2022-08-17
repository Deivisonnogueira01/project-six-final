import { CreateDogDTO } from './dogs/dto/dogs.dto';
import { CreateCatDTO } from './cats/dto/cats.dto';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'CATS_REPOSITORY',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'six-mysql',
        port: 3306,
        username: 'root',
        password: 'admin',
        database: 'animals',
        entities: [CreateCatDTO, CreateDogDTO],
        synchronize: true,
        logging: true,

        ///Docker 
      });

      return dataSource.initialize();
    },
  },
];