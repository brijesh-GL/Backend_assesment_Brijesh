
import mongoose from 'mongoose'
mongoose.connect("mongodb://localhost:27017/sampledb").then((resu)=>console.log('connected to db')).catch((e)=>console.log('error in connection',e))

const contactModel=mongoose.model("usercollection",{
    fname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,   
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String
    },
    role:{
        type:String,
        default:"user",
        enum:['user','admin'],
        required:true
    }
})


export default  contactModel