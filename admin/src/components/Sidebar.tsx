import { assets } from "../assets/admin/assets"
import { NavLink } from "react-router-dom"

export const Sidebar = () => {
  return (
    <div className="w-[330px]  text-lg text-slate-600 border-slate-200 border h-full">

        <div className="">
            <NavLink to= "/admin-dashboard" className={({isActive}) =>  `flex p-4 gap-x-3 transition-all duration-500 ${isActive?"bg-blue-300 border-r-4 border-black text-white   ":""}` }>
                <img src={assets.home_icon}  className="" />
                Dashboard
            </NavLink>
        </div>

        <div className="">
            <NavLink to="/appointment-list" className={({isActive}) =>  `flex p-4 gap-x-3 transition-all duration-500 ${isActive?"bg-blue-300 border-r-4 border-black text-white  ":""}` }>
                <img src={assets.appointment_icon}  className="" />
                Appointments
            </NavLink>
        </div>
        
        <div className="">
            <NavLink to="/add-doctor" className={({isActive}) => `flex p-4 gap-x-3 transition-all duration-500 ${isActive?"bg-blue-300 border-r-4 border-black text-white  ":""}` }>
                <img src={assets.add_icon}  className="" />
                Add Doctor
            </NavLink>
        </div>
        
        <div className="">
            <NavLink to="/doctor-list" className={({isActive}) =>  `flex p-4 gap-x-3 transition-all duration-500 ${isActive?"bg-blue-300 border-r-4 border-black text-white  ":""}` }>
                <img src={assets.people_icon}  className="" />
                Doctors List
            </NavLink>
        </div>

    </div>
  )
}
