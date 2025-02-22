import mongoose from "mongoose";
const Users = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6
    }
})
const User=mongoose.model('User',Users);
export default User;