import "./App.css"
import PostForm from "./comp/PostForm"
import { GoMegaphone } from "react-icons/go"
import Footer from "./comp/Footer"
import { useEffect, useState } from "react"
import postService from "./services/post"
import PostDisplay from "./comp/PostDisplay"


function App() {
    const [posts, setPosts] = useState([])

    const fetchAllAndSetBlogs = async () => {
        let initialPosts = await postService.getAll()
        initialPosts = initialPosts.map(post => {
            return { ...post, date: new Date(post.date) }
        })
        setPosts(initialPosts.sort((objA, objB) => Number(objB.date) - Number(objA.date)))
    }

    useEffect(() => {
        fetchAllAndSetBlogs()
    }, [])

    const createNewPost = async (postObj) => {
        await postService.createPost(postObj)
        await fetchAllAndSetBlogs()
    }

    return (
        <div>
            <div className="navbar bg-neutral text-4xl p-4 flex justify-start items-center shadow-md space-x-2">
                <GoMegaphone size="32" className="hover:animate-pulse relative left-10"/>
                <span className="relative left-10">SCREAMER</span>
            </div>
            <PostForm createNewPost={createNewPost} />
            <PostDisplay posts={posts}/>
            <Footer />
        </div>
    )
}

export default App
