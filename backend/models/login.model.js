import mongoose from "mongoose";


const loginSchema = new mongoose.Schema({
    email : { 
        type : String,
        required : true
    } , 
    password : {
        type : String ,
        required : true
    }
} , { collection: 'user' })

const Login = mongoose.model('Login' , loginSchema)

export default Login