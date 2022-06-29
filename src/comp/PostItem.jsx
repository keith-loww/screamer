import React from "react"

const PostItem = ({ post }) => {
    const { author, content, date } = post
    return (
        <div className="collapse border-primary border rounded">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-none text-none-content peer-checked:bg-primary peer-checked:text-primary-content text-xl font-medium">
                {content}
            </div>
            <div className="collapse-content bg-none text-none-content peer-checked:bg-primary peer-checked:text-primary-content flex flex-wrap">
                <span className="basis-full">by: {author}</span>
                <span className="basis-full">{date.toString()}</span>
            </div>
        </div>
    )
}

export default PostItem