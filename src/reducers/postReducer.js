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
        const posts = postService.getAll()
        dispatch(setPosts(posts))
    }
}

export const createNewPost = (obj) => {
    return async dispatch => {
        const added = postService.createPost(obj)
        dispatch(appendPost(added))
    }
}

export const { setPosts, appendPost } = postSlice.actions
export default postSlice.reducer