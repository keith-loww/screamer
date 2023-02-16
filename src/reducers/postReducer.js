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
        },
        updatePostState(state, action) {
            return state.map(post => post.id === action.payload.id ? action.payload : post)
        }
    }
})

export const initializePosts = () => {
    return async dispatch => {
        const posts = await postService.getAll()
        dispatch(setPosts(posts))
    }
}

export const createNewPost = (postObj) => {
    return async dispatch => {
        const added = await postService.createPost(postObj)
        dispatch(appendPost(added))
    }
}
export const updatePost = (postObj) => {
    return async dispatch => {
        const updated = await postService.updatePost(postObj)
        dispatch(updatePostState(updated))
    }
}

export const { setPosts, appendPost, updatePostState } = postSlice.actions
export default postSlice.reducer