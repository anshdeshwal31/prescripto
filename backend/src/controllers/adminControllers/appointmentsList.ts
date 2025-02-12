import { Request , Response , NextFunction } from "express";
import { AppointmentModel } from "../../models/appointmentsModel";

export const AppointmentList = async (req:Request, res:Response , next : NextFunction) => {
    try {
        const appointments = await AppointmentModel.find({})
        res.json({ success: true, appointments })

    } catch (error) {
        console.log(error)
        res.json({ success: false, error })
    }

}