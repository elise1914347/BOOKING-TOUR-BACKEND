import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    fistName:{
        type:String,
    required:[true,"first-name is required"]},
    lastName:String,
    email:{
        type:String,
        unique:true},
    password:{
        type:String,
        default:"1232@"},
    phone:String,
    gender:{
        type:String,
    enum:["male","female"]},
    age:String,
    role:{
        type:String,
        enum:["admin","elise","user"],
        default:"user"
    },
    status:{
        type:String,
        enum:["user"]
    },
},{timestamps:true}
);
const UserInfo=mongoose.model("user",UserSchema);
export default UserInfo;