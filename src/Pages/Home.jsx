import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className='mx-auto max-w-screen-2xl'>
            <Navbar /> 
            <Outlet />
        </div>
    )
}

export default Home