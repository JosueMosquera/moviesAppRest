import { Request, Response } from "express";
import Actor from "../models/actor";
import cloudinary from 'cloudinary'
const cloudinaryCloud = cloudinary.v2
cloudinaryCloud.config({
    cloud_name:'dzz16rbdb',
    api_key:'186842746161464',
    api_secret:'41d-ukG-vs87Pkb19nyLdZ4sH0c'
  });
export const getActores = async(req:Request,res:Response)=>{
        const actores = await Actor.findAll();
        res.json(actores)
}
export const getActor = async(req:Request,res:Response)=>{
    const {id} = req.params;
    const actor = await Actor.findByPk(id)
    if(actor){   
    res.json(actor)
    }
    else{
        res.status(404).json({
        msg:`el actor con id ${id} no existe en la db`
        })
    }
}
export const postActor = async(req:Request,res:Response)=>{
    const {body} = req
    const fileCloudinary = req.files?.foto
    try {
        const existeNombre = await Actor.findOne({
            where:{
                nombre:body.nombre
            }
        })
        if(existeNombre){
            return res.status(400).json({
                msg:`Ya existe un actor con el nombre ${body.nombre}`
            })
        }
        const actor = new Actor(body);
         if(fileCloudinary){
            const {secure_url} = await cloudinaryCloud.uploader.upload(fileCloudinary?.tempFilePath)
            actor.foto=secure_url
        } 
       
        await actor.save()
        res.json(actor)
        
    } catch (error) {
        res.status(500).json({
            msg:error
        })
    }   
}
export const putActor = async(req:Request,res:Response)=>{
    const {id} = req.params
    const {body} = req
    const fileCloudinary = req.files?.foto
    try {
         const actor = await Actor.findByPk(id)
         if(actor){
            if(fileCloudinary){
                const {secure_url} = await cloudinaryCloud.uploader.upload(fileCloudinary?.tempFilePath)
                await actor.update({foto:secure_url})
            } 
                await actor.update(body);
                res.json(actor)
         }
         else{
            return res.status(404).json({
                msg:`el actor con id ${id} no existe en la db`
                })
         }
        
    } catch (error) {
        res.status(500).json({
            msg:'error'
        })
    }
   
}
export const deleteActor = async(req:Request,res:Response)=>{
    const {id} = req.params
    try {
        const actor = await Actor.findByPk(id)
        if(actor){
               await actor.destroy();
               res.json(actor)
        }
        else{
           return res.status(404).json({
               msg:`el actor con id ${id} no existe en la db`
               })
        }
       
   } catch (error) {
       res.status(500).json({
           msg:error
       })
   }
}
