import {Sequelize} from 'sequelize';

const db = new Sequelize('moviesapp','root','',{
    host:'localhost',
    dialect:'mysql'
    //loggin: false
});
export default db;
