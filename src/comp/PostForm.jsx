import React from "react"

const PostForm = () => {
    const submitHandler = (event) => {
        event.preventDefault()
    }

    return (
        <form className="card space-y-2 p-2 m-4 flex" onSubmit={submitHandler}>
            <input className="input input-bordered input-info w-full max-w-xs" placeholder="WHO'S SCREAMING?" />
            <textarea className="input input-bordered input-info h-20 w-full max-w-xs" placeholder="SCREAM HERE..." />
            <button className="btn w-48">Scream</button>
        </form>
    )
}

export default PostForm