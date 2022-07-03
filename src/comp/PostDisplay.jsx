import React from "react"
import PostItem from "./PostItem"
import { useState } from "react"
import { useSelector } from "react-redux/es/exports"
import { useUpperField } from "../hooks"

const PostDisplay = () => {
    const [sort, setSort] = useState("default")
    const sorter = (a, b) => {
        if (sort === "mostLiked") {
            return b.likes - a.likes
        } else {
            return Number(new Date(b.date)) - Number(new Date(a.date))
        }
    }

    const { clear: clearSearch, ...searchField } = useUpperField()
    const [ search, setSearch ] = useState("")

    const searchSubmitHandler = (e) => {
        e.preventDefault()
        setSearch(searchField.value)
        clearSearch()
    }

    const posts = useSelector(({ posts }) => posts.filter(post => post.content.includes(search)).sort(sorter))

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
                    <form className="input-group" onSubmit={searchSubmitHandler}>
                        <input {...searchField} type="text" placeholder="Search…" className="input input-bordered" />
                        <button className="btn btn-square" type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </form>
                </div>
            </div>
            {posts.map(post => <PostItem key={post.id} post={post}/>)}
        </div>
    )
}

export default PostDisplay