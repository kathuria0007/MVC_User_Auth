import express from "express";
import ejs from "ejs";
import path from "path"
import { fileURLToPath } from "url";
const Proute=express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

Proute
.get("/",(req,res)=>{;
    res.render('login')
     })
export default Proute;