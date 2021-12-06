import dotenv from "dotenv";
import Server from "./models/server";
//configuracion de dotenv
dotenv.config();
const server = new Server();
//server
server.listen();