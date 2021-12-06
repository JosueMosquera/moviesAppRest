import { Request, Response } from "express";
import Pelicula_Actor from "../models/actor_pelicula";

export const getPeliculasActores = async(req:Request,res:Response)=>{
        const peliculasActores = await Pelicula_Actor.findAll();
        res.json(peliculasActores)
}
export const getpeliculasActor = async(req:Request,res:Response)=>{
    const {id} = req.params;
    const peliculasActores = await Pelicula_Actor.findByPk(id)
    if(peliculasActores){   
    res.json(peliculasActores)
    }
    else{
        res.status(404).json({
        msg:`la pelicula con id ${id} no existe en la db`
        })
    }
}
export const postPeliculaActores = async(req:Request,res:Response)=>{
    const {body} = req
    try {
        const pelicula = new Pelicula_Actor(body);
        await pelicula.save()
        res.json(pelicula)
        } 
    catch (error) {
        res.status(500).json({
            msg:error
        })
    }   
}
export const putPeliculaActores = async(req:Request,res:Response)=>{
    const {id} = req.params
    const {body} = req
    try {
         const pelicula = await Pelicula_Actor.findByPk(id)
         if(pelicula){
                await pelicula.update(body);
                res.json(pelicula)
         }
         else{
            return res.status(404).json({
                msg:`la pelicula con id ${id} no existe en la db`
                })
         }
        
    } catch (error) {
        res.status(500).json({
            msg:'error'
        })
    }
   
}
export const deletePeliculaActores = async(req:Request,res:Response)=>{
    const {id} = req.params
    try {
        const pelicula = await Pelicula_Actor.findByPk(id)
        if(pelicula){
               await pelicula.update({estado:false});
               res.json(pelicula)
        }
        else{
           return res.status(404).json({
               msg:`la pelicula con id ${id} no existe en la db`
               })
        }
       
   } catch (error) {
       res.status(500).json({
           msg:'error'
       })
   }
}