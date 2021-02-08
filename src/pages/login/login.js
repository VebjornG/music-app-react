import React from "react"
import { Link, Router } from 'react-router-dom'
import { loginURL } from "../../authentication/spotify"
import { Container, Button, Image } from "./login-styles"

export default function Login() {
    return (
        <>
            <Container>
                <Image src={"/images/spotify-white.jpg"}/>
                <Button onClick={() => window.open(`${loginURL}`)}>LOGIN TO SPOTIFY</Button>
            </Container >
        </>
    )
}
