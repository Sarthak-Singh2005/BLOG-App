import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function getData() {
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
                const id = data.posts._id;
            } catch (err) {
                console.log(err);
            }
        }
        cont();
    }, []);
}
export default function Editblog() {
    getData();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    useEffect(() => {
        async function edited() {
            try {
                const co = await fetch(`http://localhost:5000/api/post/${id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title: "new title",
                        content: "new content",
                    }),
                    credentials: "include",
                })
                const data1 = await co.json();
                console.log(data1);

            } catch (err) {
                console.log(err);
            }
        }
        edited();
    }, [])
    const navigate = useNavigate();
    const handleeditblog = () => {
        navigate(`/edit/${id}`);
    }
    return (
        <div className="box">
            <form onSubmit={handleeditblog}>
                <label htmlFor="title">Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="title" />
                <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}