import Poi from "../model/Poi.js";

export async function getPois(req,res){
    const pois = await Poi.find();
    res.json(pois);
}

export async function createPoi(req,res){
    //TODO
}