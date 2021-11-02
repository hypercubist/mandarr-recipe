import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouters";
import recipeRouter from "./routers/recipeRouters";
import userRouter from "./routers/userRouters";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/recipes", recipeRouter);

export default app;
