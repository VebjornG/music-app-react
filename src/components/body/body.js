import React from "react"
import { Container } from "./body-styles"
import Header from "../header/header"

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