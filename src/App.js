import "./App.css"
import Footer from "./comp/Footer"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { initializePosts } from "./reducers/postReducer"
import Notification from "./comp/Notfication"
import PostsPage from "./comp/PostsPage"
import PostPage from "./comp/PostPage"
import { Routes, Route, useMatch } from "react-router-dom"
import NavBar from "./comp/NavBar"

function App() {
    // const [posts, setPosts] = useState([])
    const dispatch = useDispatch()
    const { posts } = useSelector(state => state)

    useEffect(() => {
        dispatch(initializePosts())
    }, [dispatch])

    const postsMatch = useMatch("/posts/:id")
    const postToView = postsMatch
        ? posts.find(blog => blog.id === String(postsMatch.params.id))
        : null

    return (
        <div>
            <NavBar />
            <div className="m-4">
                <Notification />
            </div>

            <Routes>
                <Route path="/" element={<PostsPage />}></Route>
                <Route path="/posts/:id" element={<PostPage post={postToView} />}></Route>
            </Routes>

            <Footer />
        </div>
    )
}

export default App
