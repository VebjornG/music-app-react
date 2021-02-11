import React, { useEffect } from "react"
import { useStateProviderValue } from "../../context/stateprovider"
import { Container,
         HeaderLeft,
         StyledSearchIcon,
         StyledAvatar,
         Input,
         HeaderRight,
         H4 } from "./header-styles"

export default function Header({ spotifyAPI }) {
    const [{ user }, dispatch] = useStateProviderValue() 

    return (
        <>
            <Container>
                <HeaderLeft>
                    <StyledSearchIcon />
                    <Input 
                        placeholder="Search for Artists, Songs, or Podcasts"
                        type="text"
                    />
                </HeaderLeft>

                <HeaderRight>
                    <StyledAvatar alt={user?.display_name} src={user?.images[0]?.url}/>
                    <H4>{user?.display_name}</H4>
                </HeaderRight>
            </Container>
        </>
    )
}