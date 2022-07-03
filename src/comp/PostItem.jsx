import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { AiFillLike } from "react-icons/ai"
import { BiCommentError } from "react-icons/bi"
import { updatePost } from "../reducers/postReducer"
import { useDispatch } from "react-redux"

const PostItem = ({ post }) => {
    const { author, content } = post
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addLike = () => {
        const updated = { ...post, likes: post.likes + 1 }
        dispatch(updatePost(updated))
    }

    return (
        <div className="card shadow-md hover:shadow-lg" onDoubleClick={() => navigate(`/posts/${post.id}`)}>
            <div className="card-body">
                <Link to={`/posts/${post.id}`}>
                    <h2 className="card-title">{content}</h2>
                </Link>
                <p className="text-sm">{author}</p>
                <div className="flex space-x-6">
                    <div className="flex gap-2">
                        <button onClick={addLike} className="tooltip tooltip-right z-40" data-tip="Like this post"><AiFillLike /></button>
                        {post.likes ? post.likes : 0}
                    </div>
                    <div className="flex gap-2">
                        <Link to={`/posts/${post.id}`} className="tooltip tooltip-right z-30" data-tip="View replies">
                            <BiCommentError className="relative top-1" />
                        </Link>
                        {post.comments.length}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem