import React from "react"
import Body from "../../components/body/body"
import Sidebar from "../../components/sidebar/sidebar/sidebar"
import Footer from "../../components/footer/footer"
import { Container } from "./player-styles"

export default function Player({ spotifyAPI }) {
    return (
        <>
            <Container>
                <Sidebar />
                <Body spotifyAPI={spotifyAPI}/>
            </Container>
            <Footer spotifyAPI={spotifyAPI}/>
        </>
    )
}