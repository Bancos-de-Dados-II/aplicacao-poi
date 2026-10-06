import express from "express";
import { getPois, createPoi } from "../controller/PoiController.js";

const PoiRouter = express.Router();

PoiRouter.get('/', getPois);
PoiRouter.post('/', createPoi);

export default PoiRouter;