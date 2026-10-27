import express from "express";
import { getPois, createPoi, getPoiByText,
    deletePoi, updatePoi
 } from "../controller/PoiController.js";

const PoiRouter = express.Router();


PoiRouter.post('/', createPoi);
PoiRouter.get('/', getPois);
PoiRouter.get('/text/:text', getPoiByText);
PoiRouter.delete('/:id', deletePoi);
PoiRouter.patch('/:id', updatePoi);

export default PoiRouter;