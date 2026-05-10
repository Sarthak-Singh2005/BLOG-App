import React from "react";
import "../App.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Createblog() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const handleCreateblog = async (e) => {
        e.preventDefault();
        console.log("Submit Working");
        try {
            const res = await fetch("http://localhost:5000/api/post/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                
                body: JSON.stringify({ title, content }),
                credentials: "include",
            })
            const data = await res.json();
            alert(data.message);
            // navigate("/blog", { replace: true });
            navigate(-1);
        } catch (err) {
            console.log(err);
        }

    }
    return (
        <div className="box">
            <form onSubmit={handleCreateblog}>
                <label htmlFor="title">Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="title" />
                <textarea value={content} placeholder="Write Something...." onChange={(e) => setContent(e.target.value)}></textarea>
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}