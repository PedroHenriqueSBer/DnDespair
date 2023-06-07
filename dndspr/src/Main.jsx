import { Outlet } from "react-router-dom";
import Header from './Components/Default/Header/Header'
import SideBar from './Components/Default/Sidebar/SideBar'
export default _ =>
    <>
        <Header/>
        <Outlet/>
        <SideBar/>
    </>