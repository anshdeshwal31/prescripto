import { assets } from "../assets/admin/assets"
import { NavLink } from "react-router-dom"
import { Sidebar } from "./Sidebar"
import { Outlet } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="h-full">
      <div>

          <div className="flex justify-between">
              <div className="flex px-10  py-2 gap-x-3">
                  <NavLink to="/admin-dashboard"><img src={assets.admin_logo} className="h-[45px]" /></NavLink>
                  <button className="px-3 h-6 text-sm border border-slate-500 rounded-full self-center text-slate-500">Admin</button>
              </div>

              <div className="px-10 py-2">
                <button className="bg-primary-blue rounded-full text-white px-12 py-4">Logout</button>
              </div>
          </div>
          <hr className="" />

      </div>

      <div className="flex h-screen">
        <Sidebar/>
        <Outlet/>
      </div>

    </div>
  )
}
