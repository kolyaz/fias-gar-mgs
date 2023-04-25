import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
// import dbConfig from '../config/dbConfig.js';

dotenv.config();
const sequelize = new Sequelize('GAR', 'root', '123', {
  host: 'localhost', // dev
  // host: 'db', // production
  dialect: 'mariadb',
  operatorsAliases: 0,
});
export default sequelize;
