import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { errorNotif, updateNotif } from "../reducers/notificationReducer"
// import { createNewPost } from "../reducers/postReducer"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import postService from "../services/post.js"

const PostForm = () => {
    const queryClient = useQueryClient()

    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")

    const dispatch = useDispatch()

    const createPostMutation = useMutation({
        mutationFn: postService.createPost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["posts"] })
        },
        onError: (error) => {
            dispatch(errorNotif(error.response.data.error, 5))
        }
    })

    const submitHandler = async (event) => {
        event.preventDefault()
        if (author.length < 3) {
            await dispatch(errorNotif("AUTHOR MUST BE 3 OR MORE CHARACTERS LONG", 5))
            return
        }

        if (content.length < 5) {
            await dispatch(errorNotif("SCREAM MUST BE 5 OR MORE CHARACTERS LONG", 5))
            return
        }

        // await dispatch(createNewPost({
        //     author: author.toUpperCase(),
        //     content: content.toUpperCase()
        // }))

        createPostMutation.mutate({
            author: author.toUpperCase(),
            content: content.toUpperCase(),
        })

        dispatch(updateNotif("SUCCESSFULLY SCREAMED", 5))
        setAuthor("")
        setContent("")
    }

    return (
        <form className="card space-y-2 p-2 m-4 flex" onSubmit={submitHandler}>
            <input className="input input-bordered w-full max-w-xs" placeholder="WHO'S SCREAMING?"
                value={author} onChange={({ target }) => setAuthor(target.value.toUpperCase())} />
            <textarea className="input input-bordered h-20 w-full max-w-xs" placeholder="SCREAM HERE..."
                value={content} onChange={({ target }) => setContent(target.value.toUpperCase())} />
            <button className="btn w-48">Scream</button>
        </form>
    )
}

export default PostForm