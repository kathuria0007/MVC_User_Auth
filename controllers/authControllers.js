import User from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const login=async (req,res)=>{
    try{
        
        if(!req.body.email || !req.body.password)
        {
            res.json({
                message:"Bad Request, Mandatory Creditionals Missing",
                status:404
            })
        }

        const user=await User.findOne({where:{
                       email:req.body.email
        }});
        
        if(!user)
        {
            res.json({
                message:"User Doesnot Exists"
            })
        }
        const isauth = bcrypt.compareSync(req.body.password.toString(), user.password);
        if(isauth)
        {
            var token=jwt.sign({email:req.body.email},'shhhh');
            user.token=token;
            user.save();
            res.json({token})
        }

    }catch(err)
    {
        console.log("Error"+err);
    }
}
export const newuser=async (req,res)=>{
      try{
            if(!req.body.email || !req.body.password)
            {
                res.json({
                    message:"Bad Request, Mandatory Creditionals Missing",
                    status:404
                })
            }
            const user=await User.findOne({where:{
                email:req.body.email
               }});
 
            if(user)
            {
                res.json({
                    message:"User Already Exists"
                })
            }
           else
           {
                const u1=await User.create({
                name:req.body.name,
                age:req.body.age,
                email:req.body.email,
                password:req.body.password
            })
            const hash=bcrypt.hashSync(req.body.password.toString(),10);
            u1.password=hash
            var token=jwt.sign({email:req.body.email},"shhh",{expiresIn:"1h"})
            u1.token=token
            u1.save()
            res.json({token})
          }
     }catch(err)
        {
            console.log("error" + err);
        }
}

// export const logout=(req,res)=>{

//     var token=req.get('Authorization').split("Bearer ")[1];
//     var decoded=jwt.verify(token,'shhhh')
//     console.log(decoded);
//     if(!decoded)
//     {
//         res.json({message:"Bad Request Kindly send a valid token"})
//     }
  
//     const data=User.findOne({where:{
//         email:req.body.email
//     }})
//     data.destroy({where:{
//         email:req.body.email
//     }})
    
// }
 























// const doesexist=await User.findOne({email:email})
// if(doesexist)
// {
//     res.json({
//         message:"Already Exists"
//     })
// }