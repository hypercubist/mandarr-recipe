import express from "express";
import morgan from "morgan";

const app = express();
const logger = morgan("dev");

const handleHome = (req, res) => {
  res.send("Home...!");
};

app.get("/", handleHome);

export default app;
