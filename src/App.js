import "./App.css"
import { GoMegaphone } from "react-icons/go"
import Footer from "./comp/Footer"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { initializePosts } from "./reducers/postReducer"
import Notification from "./comp/Notfication"
import PostsPage from "./comp/PostsPage"
import PostPage from "./comp/PostPage"
import { Routes, Route, useMatch } from "react-router-dom"


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
            <div className="navbar bg-neutral text-4xl p-4 flex justify-start items-center shadow-md space-x-2">
                <GoMegaphone size="32" className="hover:animate-pulse relative left-10"/>
                <span className="relative left-10">SCREAMER</span>
            </div>
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
