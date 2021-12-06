import express, { Application } from 'express';
import userRoutes from '../routes/actor'
import peliculaRoutes from '../routes/pelicula'
import peliculaActorRoutes from '../routes/peliculaActor'
import cors from 'cors'
import db from '../db/connection';
import fileUpload from 'express-fileupload'
class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        actor: '/api/actor',
        pelicula:'/api/pelicula',
        peliculaActor:'/api/peliculaActor'
    }
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        //conectarse a la db
        this.dbConnection();
        //ejecutar middlewares
        this.middlewares()
        // definir las rutas
        this.routes()

    }
    //conectar base de datos
    async dbConnection() {
        try {
            await db.authenticate();
            console.log('database online')
        } catch (error:any) {
            throw new Error(error);
        }
    }
    middlewares() {
        //CORS
        this.app.use(cors())
        //Lectura del body
        this.app.use(express.json());
        //Carpeta publica
        this.app.use(express.static('public'))
        this.app.use(fileUpload({
            useTempFiles:true,
            tempFileDir:"/tmp/",
            createParentPath:true
          }))
    }
    routes() {
        this.app.use(this.apiPaths.actor, userRoutes)
        this.app.use(this.apiPaths.pelicula, peliculaRoutes)
        this.app.use(this.apiPaths.peliculaActor, peliculaActorRoutes)
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto:' + this.port);
        })
    }
}
export default Server;