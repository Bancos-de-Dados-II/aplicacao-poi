import express from "express";
import { getPois, createPoi, getPoiByText } from "../controller/PoiController.js";

const PoiRouter = express.Router();

PoiRouter.get('/', getPois);
PoiRouter.post('/', createPoi);
PoiRouter.get('/text/:text', getPoiByText);

export default PoiRouter;