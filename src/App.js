import "./App.css"
import PostForm from "./comp/PostForm"
import { GoMegaphone } from "react-icons/go"
import Footer from "./comp/Footer"
import { useEffect } from "react"
import PostDisplay from "./comp/PostDisplay"
import { useDispatch } from "react-redux"
import { initializePosts } from "./reducers/postReducer"
import Notification from "./comp/Notfication"


function App() {
    // const [posts, setPosts] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializePosts())
    }, [dispatch])

    return (
        <div>
            <div className="navbar bg-neutral text-4xl p-4 flex justify-start items-center shadow-md space-x-2">
                <GoMegaphone size="32" className="hover:animate-pulse relative left-10"/>
                <span className="relative left-10">SCREAMER</span>
            </div>
            <div className="m-4">
                <Notification />
            </div>
            <PostForm />
            <PostDisplay/>
            <Footer />
        </div>
    )
}

export default App
