import express, {Router} from "express"
import { UserLoginController } from "../controllers/userControllers/loginController";
import { BookAppointmentController } from "../controllers/userControllers/bookAppointmentController";
import { PayOnlineController } from "../controllers/userControllers/payOnlineController";
import { CancelAppointmentController } from "../controllers/userControllers/cancelAppointmentController";
import { SaveInformationController } from "../controllers/userControllers/saveInformationController";
import { GetUserProfile } from "../controllers/userControllers/getUserProfile";
import { GetAppointmentList } from "../controllers/userControllers/getAppointmentList";
import { EditUserController } from "../controllers/userControllers/editUser";
import { AuthUserMiddleware } from "../middlewares/authUser";
import { GetDoctorList } from "../controllers/userControllers/getDoctorList";


export const userRouter:Router = express.Router()

// authorization routes
userRouter.post("/saveInformation", SaveInformationController);
userRouter.post("/login",UserLoginController);

userRouter.use(AuthUserMiddleware)

// usablity routes
userRouter.post("/bookAppointment",BookAppointmentController);

userRouter.post("/payOnline",PayOnlineController);

userRouter.post("/cancelAppointment",CancelAppointmentController );


userRouter.post("/editUser", EditUserController)

userRouter.post("/getUserProfile", GetUserProfile)

userRouter.post("/getAppointmentList",GetAppointmentList)

userRouter.post("getDoctorList", GetDoctorList)
