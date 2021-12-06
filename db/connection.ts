import {Sequelize} from 'sequelize';
import { dbCredentials } from './dbCredentials';

const db = new Sequelize(dbCredentials.DATABASENAME,dbCredentials.USERDB,dbCredentials.PASDB,{
    host:dbCredentials.HOSTDB,
    dialect:'mysql'
    //loggin: false
});
export default db;
