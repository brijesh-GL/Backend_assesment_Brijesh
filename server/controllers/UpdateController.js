import express from 'express'
const router=express.Router()
import usermodel from '../models/UserModel.js'
import jwt from 'jsonwebtoken'

router.post('/updateuser',async (req,res)=>{
    const data=req.body
    try{
      
        const fresult=await usermodel.findOneAndUpdate({email:data.email},{email:data.newemail})
        console.log(fresult)
        res.send(fresult)
       
    }
    catch(e){
        res.send({'msg':'some error occured',"status":false})
    }
   
})

export default router