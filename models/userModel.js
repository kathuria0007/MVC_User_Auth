import db from "../helpers/initdb.js";
import { DataTypes } from "sequelize";
const User=db.define("user",{
    id:{type:DataTypes.INTEGER,autoIncrement:true,allowNull:false,unique:true,primaryKey:true},
    name:{type:DataTypes.STRING,allowNull:false},
    age:{type:DataTypes.INTEGER,allowNull:false},
    email:{type:DataTypes.STRING,allowNull:false,lowercase:true},
    password:{type:DataTypes.STRING,allowNull:false},
    token:{type:DataTypes.STRING}
})

export default User;