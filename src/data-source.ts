import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from "typeorm"
import { Customer } from './entities/Customer';

const typeormPort = process.env.TYPEORM_PORT ? parseInt(process.env.TYPEORM_PORT) : 3306;

export const MyDataSource = new DataSource({
  type: 'mysql',
  host: process.env.TYPEORM_HOST,
  port: typeormPort,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [Customer],
  logging: true,
  synchronize: true,
});