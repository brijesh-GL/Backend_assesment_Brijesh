import express from 'express'
import usermodel from '../models/GoogleLogin.js'
const router=express.Router()
router.post('/googlelogin',(req,res)=>{
    const data=req.body
    const obj=new usermodel({
        fname:data.fname,
        email:data.email,
        picture:data.pic,
        role:'admin'  
    })
    obj.save().then((results)=>res.send({'msg':'signup succeeded',"status":true})).catch((e)=>res.send({"msg":'some error occured try again',"status":false}))
})
export default router