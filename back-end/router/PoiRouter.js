import express from "express";

const PoiRouter = express.Router();

PoiRouter.get('/', (req,res)=>{
    console.log('GET')
});

PoiRouter.post('/', (req,res)=>{
    console.log('POST')
});

export default PoiRouter;