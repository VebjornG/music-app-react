import React from "react"
import SidebarOption from "../sidebaroption/sidebaroption"
import { Container, Image, Button, Ul, List, ButtonContainer } from "./sidebar-styles"
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"

export default function Sidebar() {
    return (
        <>
            <Container>
                <Image src={"/images/spotify-white.jpg"}/>
                <SidebarOption Icon={HomeIcon} title={"Home"}/>
                <SidebarOption Icon={SearchIcon} title={"Search"}/>
                <SidebarOption Icon={LibraryMusicIcon} title={"Your Library"}/>
            </Container>
        </>
    )
}