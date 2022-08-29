import express from 'express'
const router=express.Router()
import usermodel from '../models/UserModel.js'
import jwt from 'jsonwebtoken'

router.post('/deleteuser',async (req,res)=>{
    const data=req.body
    try{
        const result=await usermodel.deleteOne({email:data.email})
        console.log(result)
        if (result.deletedCount > 0) {
            res.send({"msg":"task is deleted"})
        }
        else {
            res.send({"msg":"task details does not exists"})
        }
       
    }
    catch(e){
        res.send({'msg':'some error occured',"status":false})
    }
   
})

export default router