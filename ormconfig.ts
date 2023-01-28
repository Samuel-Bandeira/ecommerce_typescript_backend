import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

export const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: 'ecommerce',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: true,
};
