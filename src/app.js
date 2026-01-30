import express from "express";
import route from "./routers/crud.router.js";

const app = express();

//mw
app.use(express.json());
app.use("/crud",route)

export default app;