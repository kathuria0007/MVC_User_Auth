import { Sequelize } from "sequelize";
const db=new Sequelize("myuserdatabase","root","root",{
    dialect:"mysql",
    host:"localhost"
});
db.authenticate()
.then(()=>{
    console.log("Db connected Successfully");
})
.catch((Err)=>{
    console.log("err"+Err);
})

export default db;
