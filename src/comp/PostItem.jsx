import React from "react"
import { Link } from "react-router-dom"

const PostItem = ({ post }) => {
    const { author, content } = post
    return (
        <div className="card bg-primary text-primary-content shadow-xl">
            <Link to={`/posts/${post.id}`}>
                <div className="card-body">
                    <h2 className="card-title">{content}</h2>
                    <p className="text-sm">{author}</p>
                </div>
            </Link>
        </div>
    )
}

export default PostItem