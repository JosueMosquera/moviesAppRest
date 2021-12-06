import {DataTypes} from 'sequelize';
import db from '../db/connection';

const Actor = db.define('actor',{
    nombre:{
        type:DataTypes.STRING
    },
    edad:{
        type:DataTypes.STRING
    },
    foto:{
        type:DataTypes.STRING
    }
});
export default Actor;