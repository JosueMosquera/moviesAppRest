import { DataTypes } from "sequelize";
import db from "../db/connection";
const Actor_Pelicula = db.define('actor_pelicula',{
    id_pelicula:{
        type:DataTypes.INTEGER
    },
    id_actor:{
        type:DataTypes.INTEGER
    }
});
export default Actor_Pelicula
