import React from "react"
import { AiFillLike, AiFillDislike } from "react-icons/ai"

const PostPage = ({ post }) => {
    if (!post) {
        return
    }
    const { content, author, likes, comments, date } = post
    return (
        <div className='card m-2 shadow-lg'>
            <div className="card-body">
                <h1 className="card-title">{content}</h1>
                <p>by: {author}</p>
                <p>{(new Date(date)).toLocaleString()}</p>
                <div>
                    <button className="btn btn-ghost">
                        <AiFillLike size={"20"} />
                    </button>
                    <span>{likes || 0}</span>
                    <button className="btn btn-ghost">
                        <AiFillDislike size={"20"} />
                    </button>
                </div>
                <div className="p-2 space-y-2">
                    <h2 className="text-xl">Replies:</h2>
                    {comments.map((comment, index) => (
                        <div className="list-item" key={index}>{comment}</div>
                    ))}
                    <form className="space-x-2">
                        <input type="text" name="comment" id="comment" placeholder="SCREAM BACK..." className="input input-bordered" />
                        <button type="submit" className="btn">SCREAM</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default PostPage