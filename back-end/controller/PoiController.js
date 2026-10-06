import Poi from "../model/Poi.js";

export async function getPois(req,res){
    try{
        const pois = await Poi.findAll();
        res.json(pois);
    } catch(error){
        res.status(400).json(error);
    }
}

export async function createPoi(req,res){
    try{
        const poi = await Poi.create(req.body);
        res.status(201).json(poi);
    }catch(error){
        res.status(400).json(error);
    }
}