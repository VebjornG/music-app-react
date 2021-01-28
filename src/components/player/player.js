import React from "react"
import Body from "./body"
import Sidebar from "./sidebar"
import Footer from "./footer"
import { Container } from "./styles/player-styles"

export default function Player({ spotifyAPI }) {
    return (
        <>
            <Container>
                <Sidebar />
                <Body />
            </Container>
            <Footer />
        </>
    )
}