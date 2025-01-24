import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();

export const dataSource = new DataSource({
  type: 'mongodb',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: null,
  password: null,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  entities: [__dirname + '/entities/*.ts'],
});

dataSource.initialize();
