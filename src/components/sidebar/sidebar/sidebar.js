import React from "react"
import SidebarOption from "../sidebaroption/sidebaroption"
import { Container, Image, Button, Ul, List, ButtonContainer, Hr, Strong} from "./sidebar-styles"
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import { useStateProviderValue } from "../../../context/stateprovider"
import { getTokenFromResponse } from "../../../authentication/spotify"

export default function Sidebar() {
    const [{ playlists }, dispatch] = useStateProviderValue()
    console.log(playlists)

    return (
        <>
            <Container>
                <Image src={"/images/spotify-white.jpg"}/>
                <SidebarOption Icon={HomeIcon} title={"Home"}/>
                <SidebarOption Icon={SearchIcon} title={"Search"}/>
                <SidebarOption Icon={LibraryMusicIcon} title={"Your Library"}/>

                <br/>
                <Strong>PLAYLISTS</Strong>
                <Hr/>

                {playlists?.items?.map(playlist => {
                    <SidebarOption title={playlist.name} />
                })}
            </Container>
        </>
    )
}