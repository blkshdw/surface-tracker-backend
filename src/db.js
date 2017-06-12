import { Sequelize } from 'sequelize';
import config from './config';

const dbName = config.database.dbName;
const url = config.database.url;

console.log('url:' + url);

let db = new Sequelize(url + "/" + dbName);

export default db;