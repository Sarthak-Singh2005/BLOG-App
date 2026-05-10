import React from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog";
import Createblog from "./Components/createBlog";
import Editblog from "./Components/Editblog";
function Home() {
  return (
    <div style={{ padding: "20px", color: "white" }}>
      <Link to="/register">
        <button className="Sign">Sign In</button>
      </Link>
      <Link to="/login">
        <button className="Login">Login In</button>
      </Link>
      <h1>Blogging App</h1>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "blueviolet" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/create" element={<Createblog/>}/>
        <Route path="/edit" element={<Editblog/>}/>
        <Route
          path="*"
          element={
            <div style={{ padding: "40px", color: "white", fontSize: "24px" }}>
              Page not found. Use /login to sign in.
            </div>
          }
        />
      </Routes>
    </div>
  );
}
