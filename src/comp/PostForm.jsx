import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { createNewPost } from "../reducers/postReducer"

const PostForm = () => {
    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")

    const dispatch = useDispatch()

    const submitHandler = async (event) => {
        event.preventDefault()
        await dispatch(createNewPost({
            author: author.toUpperCase(),
            content: content.toUpperCase()
        }))
        setAuthor("")
        setContent("")
    }

    return (
        <form className="card space-y-2 p-2 m-4 flex" onSubmit={submitHandler}>
            <input className="input input-bordered input-info w-full max-w-xs" placeholder="WHO'S SCREAMING?"
                value={author} onChange={({ target }) => setAuthor(target.value.toUpperCase())} />
            <textarea className="input input-bordered input-info h-20 w-full max-w-xs" placeholder="SCREAM HERE..."
                value={content} onChange={({ target }) => setContent(target.value.toUpperCase())} />
            <button className="btn w-48">Scream</button>
        </form>
    )
}

export default PostForm