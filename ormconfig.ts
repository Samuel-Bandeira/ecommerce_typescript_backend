import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
// import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

// export const config: SqliteConnectionOptions = {
//   type: 'sqlite',
//   database: 'ecommerce',
//   entities: ['dist/src/**/*.entity.js'],
//   synchronize: true,
// };

//postgresql://[user[:password]@][netloc][:port][/dbname][?param1=value1&...]
//"postgres://postgres:postgres@localhost:5432/ufc-sustentavel"
console.log(process.env.DATABASE_PASSWORD);
export const config: PostgresConnectionOptions = {
  type: 'postgres',
  url: `postgres://postgres:${process.env.DATABASE_PASSWORD}@localhost:5432`,
  synchronize: true,
};
