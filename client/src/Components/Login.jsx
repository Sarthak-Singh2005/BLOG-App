import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
                credentials: "include",
            })
            const data = await res.json();

            if (res.ok) {
                alert(data.message);
                console.log("Login successful:", data);
                navigate("/blog");
            } else {
                setError(data.message || "Login failed");
                alert(data.message || "Login failed");
            }
        } catch (err) {
            console.log(err);
            setError("Network error: " + err.message);
            alert("Error: " + err.message);
        }
    }

    return (
        <form onSubmit={handleLogin}>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label htmlFor="password">Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" required />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit">Login</button>
        </form>
    )
}
