import { configureStore } from "@reduxjs/toolkit"
import notificationReducer from "./reducers/notificationReducer"
import postReducer from "./reducers/postReducer"

const store = configureStore({
    reducer: {
        posts: postReducer,
        notification: notificationReducer
    }
})

export default store