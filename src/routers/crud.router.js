import express from "express";
import {create,read,update,del} from "../controllers/crud.controller.js";

const router = express.Router();

router.post("/create",create);
router.get("/read",read);
router.put("/update/:id",update);
router.delete("/delete/:id",del);

export default router;