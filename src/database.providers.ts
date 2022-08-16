import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost', // nome do serviço do Docker
        port: 3306,
        username: 'root',
        password: 'admin',
        database: 'test', // nome do BD
        entities: [
        //   CreateCatDto, CreateDogDto
        ],
        synchronize: true,

      });

      return dataSource.initialize();
    },
  },

   // Docker Compose trab
];