import Navbar from "./Navbar/Navbar"
import { Outlet } from "react-router"

const Layout = () => {
    return (
        <>
        <Navbar/>
        <div className='page-wrapper'>
        <Outlet/>
        </div>
        </>
      )
}

export default Layout