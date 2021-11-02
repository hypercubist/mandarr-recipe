import express from "express";
import { home } from "../controllers/recipeControllers";
const rootRouter = express.Router();

rootRouter.get("/", home);
export default rootRouter;
