import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./components/routing";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"





const App = () => {
    return (
    <Router>
        
        <Navbar/>
        <Routing/>
        <Footer/>
        
    </Router>
      
        

    )
}

export default App