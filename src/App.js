import "./App.css"
import PostForm from "./comp/PostForm"
import { GoMegaphone } from "react-icons/go"


function App() {
    return (
        <div>
            <div className="navbar bg-neutral text-2xl p-4 flex justify-start items-center shadow-md space-x-2">
                <GoMegaphone size="28" className="hover:animate-pulse"/>
                <span>SCREAMER</span>
            </div>
            <PostForm />
            <footer className="footer items-center p-4 bg-neutral text-neutral-content">@Copyright?</footer>
        </div>
    )
}

export default App
