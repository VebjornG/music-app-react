import React from "react"
import { Container, Footer_Left, Footer_Center, Footer_Right } from "./footer-styles"

export default function Footer() {
    return (
        <>
            <Container>
                <Footer_Left>
                    <p>Album and song detials</p>
                </Footer_Left>
                <Footer_Center>
                    <p>Player controls</p>
                </Footer_Center>
                <Footer_Right>
                    <p>Volume</p>
                </Footer_Right>
            </Container>
        </>
    )
}