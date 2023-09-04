import express from "express";
import { newuser, login } from "../controllers/authControllers.js";
const Proute=express.Router();

Proute
.post("/new",newuser)
.get("/login",login)
// .delete("/logout",logout)

export default Proute;