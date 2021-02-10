import React from "react"

import { Container,
         BodyInfo,
         Image,
         BodyInfoText,
         BodySongs,
         BodyIcons,
         StyledFavoriteIcon,
         StyledPlayCircleFilledIcon,
         StyledMoreHorizIcon,
         H2,
         Text } from "./body-styles"

import SongRow from "../songrow/songrow"
import { useStateProviderValue } from "../../context/stateprovider"
import Header from "../header/header"

export default function Body({ spotifyAPI }) {
    const [{ discover_weekly }, dispatch] = useStateProviderValue();

    const playPlaylist = (id) => {
        spotifyAPI
            .play({
                context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
            })
            .then(res => {
                spotifyAPI.getMyCurrentPlayingTrack().then(response => {
                    dispatch({
                        type: "SET_ITEM",
                        item: response.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                });
            });
    };

    const playSong = (id) => {
        spotifyAPI
            .play({
                uris: [`spotify:track:${id}`],
            })
            .then((res) => {
                spotifyAPI.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                });
            });
    };
    return (
        <>
            <Container>
                <Header />

                <BodyInfo>
                    <Image />
                    <BodyInfoText>
                        <strong>PLAYLIST</strong>
                        <H2>Discover Weekly</H2>
                        <Text>{discover_weekly?.description}</Text>
                    </BodyInfoText>
                </BodyInfo>

                <BodySongs>
                    <BodyIcons>
                        <StyledPlayCircleFilledIcon 
                            onClick={playPlaylist}
                        />
                        <StyledFavoriteIcon fontSize="large" />
                        <StyledMoreHorizIcon />
                    </BodyIcons>
                </BodySongs>

                {discover_weekly?.tracks.items.map(item => {
                    <SongRow playSong={playSong} track={item.track} />
                })}
            </Container>
        </>
    )
}