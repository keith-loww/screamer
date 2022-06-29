import "./App.css"
import PostForm from "./comp/PostForm"
import { GoMegaphone } from "react-icons/go"
import Footer from "./comp/Footer"


function App() {
    return (
        <div>
            <div className="navbar bg-neutral text-2xl p-4 flex justify-start items-center shadow-md space-x-2">
                <GoMegaphone size="28" className="hover:animate-pulse"/>
                <span>SCREAMER</span>
            </div>
            <PostForm />
            <Footer />
        </div>
    )
}

export default App
