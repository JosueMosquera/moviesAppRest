import { DataTypes } from "sequelize";
import db from "../db/connection";
const Pelicula = db.define('pelicula',{
  nombre:{
      type:DataTypes.STRING
  },
  duracion:{
      type:DataTypes.STRING
  },
  genero:{
      type:DataTypes.ENUM('Animadas', 'Romántica', 'Comedia', 'Terror')
  },
  sinopsis:{
      type:DataTypes.TEXT
  }
});
export default Pelicula;