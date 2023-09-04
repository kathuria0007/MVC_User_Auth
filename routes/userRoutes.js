import express from "express";
import { getusers } from "../controllers/userControllers.js";
const Proute=express.Router();

Proute
// .post("/",newuser)
.get("/get",getusers)

export default Proute;