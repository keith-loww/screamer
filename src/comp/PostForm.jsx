import React from "react"

const PostForm = () => {
    return (
        <div className="card space-y-2 p-2 m-2 flex">
            <input className="input input-bordered input-info w-full max-w-xs" placeholder="WHO'S SCREAMING?" />
            <textarea className="input input-bordered input-info w-full max-w-xs" placeholder="SCREAM HERE" />
            <button className="btn w-48">Scream</button>
        </div>
    )
}

export default PostForm