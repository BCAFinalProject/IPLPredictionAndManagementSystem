import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CommunityForum.css";

const CommunityForum = () => {
    const [userComment, setUserComment] = useState("");
    const [username, setUsername] = useState("");
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const user = JSON.parse(localStorage.getItem("user"));
            if (user) setUsername(user.username);
        }
    }, []);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get("http://localhost:3000/get-comments");
                setComments(response.data);
            } catch (error) {
                console.error("Error fetching comments:", error.response?.data || error.message);
            }
        };

        fetchComments();
         // Auto-refresh comments every 5 seconds (Optional)
    const interval = setInterval(fetchComments, 5000);
    return () => clearInterval(interval);

    }, []);

    const handlePostComment = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("User not logged in! No token found.");
            return;
        }

        if (!userComment.trim()) {
            console.error("Comment is empty!");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:3000/post-comment",
                { content: userComment },
                { headers: { Authorization: `Bearer ${token}`} }
            );

            console.log("Comment posted successfully:", response.data);
            setUserComment("");
            setComments([...comments, response.data]);
        } catch (error) {
            console.error("Error posting comment:", error.response?.data || error.message);
        }
    };

    return (
        <div className="community-forum">
            <h2>Community Forum</h2>
            <p className="logged-in-user">Logged in as: <strong>{username || "Guest"}</strong></p>

            {username ? (
                <div className="textarea-container">
                    <textarea
                        placeholder="Write your comment..."
                        value={userComment}
                        onChange={(e) => setUserComment(e.target.value)}
                    />
                    <button className="post-button" onClick={handlePostComment}>Post Comment</button>
                </div>
            ) : (
                <p className="login-message">You must log in to post a comment.</p>
            )}

            <div className="comments-list">
                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        <div key={index} className="comment">
                            <span className="comment-author">{comment.username}:</span> {comment.content}
                        </div>
                    ))
                ) : (
                    <p>No comments yet. Be the first to comment!</p>
                )}
            </div>
        </div>
    );
};

export default CommunityForum;