import mongoose from 'mongoose'
mongoose.connect("mongodb://localhost:27017/sampledb").then((resu)=>console.log('connected to db')).catch((e)=>console.log('error in connection',e))

const contactModel=mongoose.model("user",{
    fname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    picture:{
        type:String,
        required:true,
    }
   
 
   
  
})
export default  contactModel