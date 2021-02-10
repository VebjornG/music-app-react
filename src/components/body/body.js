import React from "react"

import { Container,
         BodyInfo,
         Image,
         BodyInfoText,
         BodySongs,
         BodyIcons,
         StyledFavoriteIcon,
         StyledPlayCircleFilledIcon,
         StyledMoreHorizIcon } from "./body-styles"

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
                        <h2>Discover Weekly</h2>
                        <p>{discover_weekly?.description}</p>
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