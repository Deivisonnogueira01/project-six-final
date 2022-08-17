
import { CreateCatDto } from 'src/cats/dto/create-cat.dto';
import { CreateDogDTO } from 'src/dogs/dto/create-dog.dto';
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
        entities: [CreateCatDto, CreateDogDTO],
        synchronize: true,
        logging: true,

        ///Docker 
      });

      return dataSource.initialize();
    },
  },
];