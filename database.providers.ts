import { CreateDogDTO } from './dogs/dto/dogs.dto';
import { CreateCatDTO } from './cats/dto/cats.dto';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'NEST001_DATABASE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'six-mysql',
        port: 3306,
        username: 'root',
        password: 'admin',
        database: 'sixdatabase',
        entities: [CreateCatDTO, CreateDogDTO],
        synchronize: true,
        logging: true,

        ///Docker 
      });

      return dataSource.initialize();
    },
  },
];