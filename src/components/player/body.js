import React from "react"
import { Container } from "./styles/body-styles"
import Header from "./header"

export default function Body() {
    return (
        <>
            <Container>
                <Header />
                <h1>I am the body</h1>
            </Container>
        </>
    )
}