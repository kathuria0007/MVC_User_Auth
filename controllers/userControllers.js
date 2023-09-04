import User from "../models/userModel.js"
export const getusers=async (req,res)=>{
    try{
          const data=await User.findAll();
          res.json(data)
    }catch(err)
    {
       res.json(401)
    }
}