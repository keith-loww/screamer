import React from "react"
import PostItem from "./PostItem"
import { useSelector } from "react-redux/es/exports"

const PostDisplay = () => {
    const posts = useSelector(({ posts }) => [...posts].sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date))))
    return (
        <div className="p-2 m-2 space-y-2 text-xl">
            {posts.map(post => <PostItem key={post.id} post={post}/>)}
        </div>
    )
}

export default PostDisplay