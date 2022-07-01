import { createSlice } from "@reduxjs/toolkit"
import postService from "../services/post"

const postSlice = createSlice({
    name: "posts",
    initialState: [],
    reducers: {
        setPosts(state, action) {
            return action.payload
        },
        appendPost(state, action) {
            state.push(action.payload)
        }
    }
})

export const initializePosts = () => {
    return async dispatch => {
        let posts = await postService.getAll()
        posts = posts.map(post => {
            return { ...post, date: new Date(post.date) }
        })
        dispatch(setPosts(posts))
    }
}

export const createNewPost = (obj) => {
    return async dispatch => {
        const added = await postService.createPost(obj)
        dispatch(appendPost(added))
    }
}

export const { setPosts, appendPost } = postSlice.actions
export default postSlice.reducer