import {z} from "zod"
import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken" 
 
export const AdminLoginController = async (req:Request, res:Response, next:NextFunction) => { 
    const jwtSecret = process.env.JWT_SECRET_KEY || 'fallback-secret'
    const loginInfoFormat = z.object({
        email:z.string().min(5).email(),
        password:z.string().min(5)
    })

    const parsedDataWithSuccess = await loginInfoFormat.safeParse(req.body)

    if(parsedDataWithSuccess.success){
        const {email, password} = parsedDataWithSuccess.data

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign({email , password}, jwtSecret)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid credentials" })
        }
        
    }
    else{
        res.json({
            success: false,
            error: "Invalid login format"
        });
    }
 
}