import "./App.css"
import PostForm from "./comp/PostForm"
import { GoMegaphone } from "react-icons/go"
import Footer from "./comp/Footer"
import { useEffect, useState } from "react"
import postService from "./services/post"
import PostDisplay from "./comp/PostDisplay"


function App() {
    const [posts, setPosts] = useState()

    useEffect(() => {
        const initialFetch = async () => {
            const initialPosts = await postService.getAll()
            setPosts(initialPosts)
        }
        initialFetch()
        console.log("CONNECTED", posts)
    }, [])

    return (
        <div>
            <div className="navbar bg-neutral text-2xl p-4 flex justify-start items-center shadow-md space-x-2">
                <GoMegaphone size="28" className="hover:animate-pulse"/>
                <span>SCREAMER</span>
            </div>
            <PostForm />
            <PostDisplay />
            <Footer />
        </div>
    )
}

export default App
