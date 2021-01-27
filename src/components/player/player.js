import React from "react"
import Body from "./body"
import Sidebar from "./sidebar"
import Footer from "./footer"
import "./player.css"

export default function Player({ spotifyAPI }) {
    return (
        <>
            <div className="body">
                <Sidebar />
                <Body />
            </div>
            <Footer />
        </>
    )
}