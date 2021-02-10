import React, { useEffect } from "react"

import { Container, 
         Footer_Left, 
         Footer_Center, 
         Footer_Right, 
         Image, 
         Div, 
         Text, 
         H4,
         StyledPlayCircleFilledIcon,
         StyledSkipNextIcon,
         StyledSkipPreviousIcon,
         StyledRepeatIcon,
         StyledShuffleIcon,
         StyledVolumeDownIcon,
         StyledPlaylistPlayIcon,
         StyledDevicesIcon,
         StyledFavoriteBorderIcon } from "./footer-styles"

import { useStateProviderValue } from "../../context/stateprovider"
import SpotifyWebApi from "spotify-web-api-js"


import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import DevicesIcon from '@material-ui/icons/Devices';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Slider, Grid } from "@material-ui/core";


const spotifyAPI = new SpotifyWebApi()     // Used to communicate with the Spotify Web API

export default function Footer() {
    const [{ token, item, playing }, dispatch] = useStateProviderValue();

    useEffect(() => {
        spotifyAPI.getMyCurrentPlaybackState().then(res => {
            console.log(res);

            dispatch({
                type: "SET_PLAYING",
                playing: res.is_playing,
            });

            dispatch({
                type: "SET_ITEM",
                item: res.item,
            });
        });
    }, [spotifyAPI]);

    const handlePlayPause = () => {
        if (playing) {
            spotifyAPI.pause();
            dispatch({
                type: "SET_PLAYING",
                playing: false,
            });
        } else {
            spotifyAPI.play();
            dispatch({
                type: "SET_PLAYING",
                playing: true,
            });
        }
    };

    const skipNext = () => {
        spotifyAPI.skipToNext();
        spotifyAPI.getMyCurrentPlayingTrack().then(res => {
            dispatch({
                type: "SET_ITEM",
                item: res.item,
            });

            dispatch({
                type: "SET_PLAYING",
                playing: true,
            });
        });
    };

    const skipPrevious = () => {
        spotifyAPI.skipToPrevious();
        spotifyAPI.getMyCurrentPlayingTrack().then(res => {
            dispatch({
                type: "SET_ITEM",
                item: res.item,
            });
            
            dispatch({
                type: "SET_PLAYING",
                playing: true,
            });
        });
    };


    return (
        <>
            <Container>
                <Footer_Left>
                    <Image src="https://img.discogs.com/ArEnMxv1tcJBwA-UFKb9FiYe-tg=/fit-in/600x591/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3807111-1345187966-4845.jpeg.jpg"/>
                    <Div numberOfLines={1}>
                        <H4>Piano Concerto No. 2</H4>
                        <Text>Rachmaninoff</Text>
                    </Div>
                    <StyledFavoriteBorderIcon />
                </Footer_Left>

                <Footer_Center>
                    <StyledShuffleIcon />
                    <StyledSkipPreviousIcon />
                    <StyledPlayCircleFilledIcon fontSize="large"/>
                    <StyledSkipNextIcon />
                    <StyledRepeatIcon />
                </Footer_Center>

                <Footer_Right>
                    <Grid container spacing={2}>
                        <Grid item>
                            <StyledPlaylistPlayIcon />
                        </Grid>
                        <Grid item>
                            <StyledDevicesIcon />
                        </Grid>
                        <Grid item>
                            <StyledVolumeDownIcon />
                        </Grid>
                        <Grid item xs>
                            <Slider style={{maxWidth: "80px", position: "relative"}}/>
                        </Grid>
                    </Grid>
                </Footer_Right>
            </Container>
        </>
    )
}