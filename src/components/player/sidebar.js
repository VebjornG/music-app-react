import React from "react"
import { Container, Image, Button, Ul, List, ButtonContainer } from "./styles/sidebar-styles"

export default function Sidebar() {
    return (
        <>
            <Container>
                <Image src={"/images/spotify-white.jpg"}/>
                <ButtonContainer>
                    <Button>
                        Home
                    </Button>
                    <Button>
                        Search
                    </Button>
                    <Button>
                        Your Library
                    </Button>
                </ButtonContainer>
                    <Button>
                        Create Playlist
                    </Button>
                    <Button>
                        Liked Songs
                    </Button>
             </Container>
        </>
    )
}