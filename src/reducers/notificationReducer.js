import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    content: "",
    error: false
}

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        setNotif(state, action) {
            state.content = action.payload
        },
        setError(state, action) {
            return {
                content: action.payload,
                error: true
            }
        },
        resetNotif() {
            return initialState
        }
    }
})

let timeoutID = null

export const updateNotif = (content, sec) => {
    return async dispatch => {
        clearTimeout(timeoutID)
        dispatch(setNotif(content))
        setTimeout(() => {
            dispatch(resetNotif())
        }, sec * 1000)
    }
}

export const errorNotif = (content, sec) => {
    return async dispatch => {
        clearTimeout(timeoutID)
        dispatch(setError(content))
        setTimeout(() => {
            dispatch(resetNotif())
        }, sec * 1000)
    }
}

export const { setNotif, setError, resetNotif } = notificationSlice.actions
export default notificationSlice.reducer