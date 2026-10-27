import express from "express";
import { getPois, createPoi, getPoiByText,
    deletePoi
 } from "../controller/PoiController.js";

const PoiRouter = express.Router();


PoiRouter.post('/', createPoi);
PoiRouter.get('/', getPois);
PoiRouter.get('/text/:text', getPoiByText);
PoiRouter.delete('/:id', deletePoi);

export default PoiRouter;