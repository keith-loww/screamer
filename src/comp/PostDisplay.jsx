import React from "react"
import PostItem from "./PostItem"

const PostDisplay = ({ posts }) => {
    return (
        <div className="p-2 m-2">
            {posts.map(post => <PostItem key={post.id} post={post}/>)}
        </div>
    )
}

export default PostDisplay