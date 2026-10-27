import Poi from "../model/Poi.js";

export async function getPois(req,res){
    const pois = await Poi.find();
    res.json(pois);
}

export async function createPoi(req,res){
    const user = await Poi.insertOne(req.body);
    if(user){
        res.status(201).json(user);
        return;
    }
    res.status(400).json({ message: "Erro ao criar Poi" });
}