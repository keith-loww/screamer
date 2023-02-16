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

    const [filter, setFilter] = useState("")

    const posts = useSelector(({ posts }) => posts.filter(post => post.content.includes(filter)).sort(sorter))

    return (
        <div className="p-2 m-2 space-y-2 text-xl">
            <div className="flex flex-row w-full">
                <div className="flex-1">
                    <select value={sort} onChange={(e) => setSort(e.target.value)} className="select select-bordered w-full max-w-xs">
                        <option value="default" disabled selected>Sort by...</option>
                        <option value="recent">Recent</option>
                        <option value="mostLiked">Most Liked</option>
                    </select>
                </div>

                <div className="form-control flex-none">
                    <input value={filter} onChange={(e) => setFilter(e.target.value.toUpperCase())} type="text" placeholder="Filter..." className="input input-bordered" />
                </div>
            </div>
            {posts.map(post => <PostItem key={post.id} post={post}/>)}
        </div>
    )
}

export default PostDisplay