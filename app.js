import express from "express"
import userRouter from "./routes/userRoutes.js"
import authRouter from "./routes/authRoutes.js"
import loginRoutes from "./routes/loginRoutes.js"
import db from "./helpers/initdb.js"
import jwt  from "jsonwebtoken"
const app=express();


const auth=((req,res,next)=>{
    try{
      var token=req.get('Authorization').split("Bearer ")[1];
      console.log(token);
      var decoded=jwt.verify(token,'shhhh')
      console.log(decoded);
      if(decoded.email)
      {
            next();
      }
      else{
        res.sendStatus(401);
      }
    }catch(err)
    {
      res.sendStatus(401);
    }
  });



app.set("view engine","ejs")
app.set("layout","layouts/layout")
app.use(express.json());
app.use(express.urlencoded({extended:true}))
// app.use("/login",loginRoutes)
app.use("/auth",authRouter);
app.use("/",auth,userRouter);


db.sync({alter:true});
app.listen(3000,()=>{
    console.log("Server Connected");
})