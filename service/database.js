import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
// import dbConfig from '../config/dbConfig.js';

dotenv.config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_ROOT, process.env.DB_ROOT_PW, {
  host: 'localhost', // dev
  // host: process.env.DB_HOST, // production
  dialect: 'mariadb',
  operatorsAliases: 0,
  logging: false,
});
export default sequelize;
