import React from "react"
import { AiFillLike, AiFillDislike } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { updatePost } from "../reducers/postReducer"
import { useUpperField } from "../hooks/"
import Reply from "./Reply"
import { updateNotif } from "../reducers/notificationReducer"

const PostPage = ({ post }) => {
    if (!post) {
        return
    }
    const { content, author, likes, comments, date } = post
    const dispatch = useDispatch()

    const { clear, ...comment } = useUpperField()

    const addLike = () => {
        const updated = { ...post, likes: likes + 1 }
        dispatch(updatePost(updated))
    }

    const removeLike = () => {
        const updated = { ...post, likes: likes - 1 }
        dispatch(updatePost(updated))
    }

    const addComment = (event) => {
        event.preventDefault()
        const updated = { ...post, comments: [...comments, comment.value] }
        console.log(updated)
        dispatch(updatePost(updated))
        dispatch(updateNotif("Successfully screamed back!"))
        clear()
    }

    return (
        <div className='card m-2 shadow-lg border border-base-300'>
            <div className="card-body">
                <h1 className="card-title">{content}</h1>
                <p>by: {author}</p>
                <p>{(new Date(date)).toLocaleString()}</p>
                <div>
                    <button className="btn btn-ghost" onClick={addLike}>
                        <AiFillLike size={"20"} />
                    </button>
                    <span>{likes || 0}</span>
                    <button className="btn btn-ghost" onClick={removeLike}>
                        <AiFillDislike size={"20"} />
                    </button>
                </div>
                <div className="p-2 space-y-2">
                    <h2 className="text-xl">Replies:</h2>
                    {comments.map((comment, index) => (
                        <Reply className="list-item" content={comment} key={index}/>
                    ))}
                    <form className="space-x-2" onSubmit={addComment}>
                        <input {...comment} type="text" name="comment" id="comment" placeholder="SCREAM BACK..." className="input input-bordered" />
                        <button type="submit" className="btn">SCREAM</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default PostPage