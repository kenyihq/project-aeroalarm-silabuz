import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./components/Routing";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home"





const App = () => {
    return (
    <Router>
        <Navbar/>
        <Routing/>
    </Router>
      
        

    )
}

export default App