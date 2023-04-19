import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles.css"
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./routes/Home";
import Service from "./routes/Service";
import About from "./routes/About"
import Contact from "./routes/Contact";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      
      </Routes>
      
    </div>
  );
}

export default App;
