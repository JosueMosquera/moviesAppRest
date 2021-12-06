import { Request, Response } from "express";
import Pelicula from "../models/pelicula";

export const getPeliculas = async(req:Request,res:Response)=>{
        const peliculas = await Pelicula.findAll();
        res.json(peliculas)
}
export const getPelicula = async(req:Request,res:Response)=>{
    const {id} = req.params;
    const pelicula = await Pelicula.findByPk(id)
    if(pelicula){   
    res.json(pelicula)
    }
    else{
        res.status(404).json({
        msg:`la pelicula con id ${id} no existe en la db`
        })
    }
}
export const postPelicula = async(req:Request,res:Response)=>{
    const {body} = req
    try {
        const existeNombre = await Pelicula.findOne({
            where:{
                nombre:body.nombre
            }
        })
        if(existeNombre){
            return res.status(400).json({
                msg:`Ya existe una pelicula con el nombre ${body.nombre}`
            })
        }
        const pelicula = new Pelicula(body);
        await pelicula.save()
        res.json(pelicula)
        
    } catch (error) {
        res.status(500).json({
            msg:error
        })
    }   
}
export const putPelicula = async(req:Request,res:Response)=>{
    const {id} = req.params
    const {body} = req
    try {
         const pelicula = await Pelicula.findByPk(id)
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
export const deletePelicula = async(req:Request,res:Response)=>{
    const {id} = req.params
    try {
        const pelicula = await Pelicula.findByPk(id)
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