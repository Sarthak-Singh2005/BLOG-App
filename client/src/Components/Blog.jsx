import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Blog() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function cont() {
            try {
                const content1 = await fetch("http://localhost:5000/api/post/all", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                })
                const data = await content1.json();
                console.log("data:", data);
                setPosts(data.posts);
            } catch (err) {
                console.log(err);
            }
        }
        cont();
    }, []);
    
    
    const navigate = useNavigate();
    const handlecreate = () => {
        navigate("/create");
    }
    const handleedit = () => {
        navigate("/edit");
    }
    return (
        <div style={{
            position: "relative",
            zIndex: 1,
            padding: "40px",
            margin: "20px auto",
            maxWidth: "900px",
            backgroundColor: "white",
            minHeight: "80vh",
            color: "black",
            borderRadius: "16px",
            boxShadow: "0 16px 40px rgba(0,0,0,0.25)",
        }}>
            <h1 style={{ marginBottom: "24px" }}>Welcome to Blog Page</h1>

            <button onClick={handlecreate} className="button">
                Create
            </button>
            <button className="button" >Logout</button>
            <h1>Post</h1>
            {
                posts.map((post) => (
                    <div className="edit" key={post._id}>
                        <p>Title: {post.title}</p>
                        <p>{post.content}</p>
                        <button className="button" onClick={handleedit}>Edit</button>
                        <button className="button">Delete</button>
                    </div>
                    )
                )}

        </div>
    );
}
