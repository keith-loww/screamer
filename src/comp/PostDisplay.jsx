import React from "react"
import PostItem from "./PostItem"
import { useState } from "react"
import { useSelector } from "react-redux/es/exports"

const PostDisplay = () => {
    const [sort, setSort] = useState("default")
    const sorter = (a, b) => {
        if (sort === "mostLiked") {
            return b.likes - a.likes
        } else {
            return Number(new Date(b.date)) - Number(new Date(a.date))
        }
    }

    const posts = useSelector(({ posts }) => [...posts].sort(sorter))

    return (
        <div className="p-2 m-2 space-y-2 text-xl">
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="select select-bordered w-full max-w-xs">
                <option value="default" disabled selected>Sort by...</option>
                <option value="recent">Recent</option>
                <option value="mostLiked">Most Liked</option>
            </select>
            {posts.map(post => <PostItem key={post.id} post={post}/>)}
        </div>
    )
}

export default PostDisplay