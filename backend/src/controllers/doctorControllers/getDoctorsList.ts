import {Request,Response, NextFunction } from "express"
import { DoctorModel } from "../../models/doctorModel"

export const GetDoctorList = async (req:Request , res:Response , next:NextFunction) => { 
    try{
        const doctorsList = await DoctorModel.find();

        res.status(200).json({
            success:true ,
            doctorsList
        })
    }catch(error){
        console.log(error)
        res.status(400).json({ success: false, error })
    }
}