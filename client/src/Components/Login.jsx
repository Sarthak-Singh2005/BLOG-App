import React from "react";
import { useState } from "react";
export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async(e)=>{
        e.preventDefault();
        try{
        const res = await fetch("http://localhost:5000/api/auth/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({email,password}),
            credentials: "include",
        })
        const data = await res.json();
        alert(data.message);
        console.log(data);
    }catch(err){
        console.log(err);
    }
    }
    
    return(
        <form onSubmit={handleLogin}>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="password">Password:</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} id="password" />
            <button type="submit">Login</button>
        </form>
    )
}