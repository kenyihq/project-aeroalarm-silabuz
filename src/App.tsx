import React from "react";
import "./App.css"

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/login/login";


const App = () => {
    return (
        <>
        <Navbar/>
        <Home/>
        </>
    )
}

export default App