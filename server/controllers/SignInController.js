import express from 'express'
const router=express.Router()
import usermodel from '../models/UserModel.js'
import jwt from 'jsonwebtoken'
import cookie from 'cookie-parser'
router.post('/signin',async (req,res)=>{
    const data=req.body
    try{
        const result=await usermodel.findOne({email:data.email})
        console.log(result)
        if(result){
            if(result.password===data.password){
                const token=jwt.sign({email:data.email,role:result.role},'jamesbond')
                res.status(200).cookie('authorizer',token,{sameSite:'strict',httpOnly:true})
              
               
                res.send({"msg":'you are authenticated',"status":true,"statusad":true,"accesstoken":token})
              
                  
                
            }
            else{
                res.send({"msg":'check your password , not authenticated',"status":false})
            }
        }
        else{
            res.send({"msg":'the email id does not exists',"status":false})
        }
       
    }
    catch(e){
        res.send({'msg':'some error occured',"status":false})
    }
   
})

export default router