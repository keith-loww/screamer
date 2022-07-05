import React from "react"

const Reply = ({ content }) => {
    return(
        <div className='border border-base-200 rounded-md p-4 shadow-md'>
            {content}
        </div>
    )
}

export default Reply