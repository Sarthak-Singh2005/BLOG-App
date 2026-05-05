import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
function Blogger(){
    return(
        <div>
            <Link to="/Blog">
            <button>Create</button>
            </Link>
        </div>
    )
}
export default function Blog(){
    return(
        <Routes>
            <Route path="/Blog" Element={<Blogger/>}></Route>
        </Routes>

    )
}