import React from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css"
function Home(){
  return(
    <div>
      <Link to="/register">
        <button className="Sign">Sign In</button>
      </Link>
      <Link to="/login">
        <button className="Login">Login In</button>
      </Link>
      <h1>Blogging App</h1>
    </div>
  )
}
export default function App(){
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/login"  element={<Login/>}/>
      </Routes>
    </div>
  )
}