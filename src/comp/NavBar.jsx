import React from "react"
import { GoMegaphone } from "react-icons/go"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <Link to={"/"}>
                <GoMegaphone size="32" className="hover:animate-pulse relative left-10"/>
                <div className="btn btn-ghost normal-case text-xl relative left-10">SCREAMER</div>
            </Link>
        </div>
    )
}

export default NavBar