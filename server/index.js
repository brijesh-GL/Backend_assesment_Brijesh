import express from 'express'
import bp from 'body-parser'
import cors from 'cors'
import google from './controllers/GoogleSignIN.js'
import routes from './controllers/UserSignUp.js'
import signin from './controllers/SignInController.js'
import Delete from './controllers/DeleteController.js'
import Update from './controllers/UpdateController.js'
import cookieParser from 'cookie-parser'
const app = express()
app.use(bp.json())
app.use(cors())
app.use(cors({origin:'http://localhost:3002',credentials:true}))
app.use(cookieParser())
app.use('/',google)
app.use('/',signin)
app.use('/',routes)
app.use('/',Delete)
app.use('/',Update)

app.listen(3003, () => console.log("server stated at port 3003"))