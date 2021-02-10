import styled from "styled-components"


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

/*const Icons = {
    PlayCircleFilledIcon,
    SkipPreviousIcon,
    SkipNextIcon,
    ShuffleIcon 
}*/

/*const SharedIconStyle = css `
    &:hover {
        transition: transform 0.2s ease-in-out;
        transform: scale(1.1) !important;
        color: #1ed15e;
    }
`;*/



/* ICONS */

export const StyledPlayCircleFilledIcon = styled(PlayCircleFilledIcon) `
    &:hover {
        transition: transform 0.2s ease-in-out;
        transform: scale(1.1) !important;
        color: #1ed15e;
    }
`;

export const StyledSkipPreviousIcon = styled(SkipPreviousIcon) `
    &:hover {
        transition: transform 0.2s ease-in-out;
        transform: scale(1.1) !important;
        color: #1ed15e;
    }
`;

export const StyledSkipNextIcon = styled(SkipNextIcon) `
    &:hover {
        transition: transform 0.2s ease-in-out;
        transform: scale(1.1) !important;
        color: #1ed15e;
    }
`;

export const StyledShuffleIcon = styled(ShuffleIcon) `
    &:hover {
        transition: transform 0.2s ease-in-out;
        transform: scale(1.1) !important;
        color: #1ed15e;
    }
`;

export const StyledRepeatIcon = styled(RepeatIcon) `
    &:hover {
        transition: transform 0.2s ease-in-out;
        transform: scale(1.1) !important;
        color: #1ed15e;
    }
`;

export const StyledPlaylistPlayIcon = styled(PlaylistPlayIcon) `
    &:hover {
        transition: transform 0.2s ease-in-out;
        transform: scale(1.1) !important;
        color: #1ed15e;
    }
`;

export const StyledVolumeDownIcon = styled(VolumeDownIcon) `
    &:hover {
        transition: transform 0.2s ease-in-out;
        transform: scale(1.1) !important;
        color: #1ed15e;
    }
`;

export const StyledDevicesIcon = styled(DevicesIcon) `
    &:hover {
        transition: transform 0.2s ease-in-out;
        transform: scale(1.1) !important;
        color: #1ed15e;
    }
`;

export const StyledFavoriteBorderIcon = styled(FavoriteBorderIcon) `
    &:hover {
        transition: transform 0.2s ease-in-out;
        transform: scale(1.1) !important;
        color: #1ed15e;
    }
`;



/* ***************************************************************** */

export const Container = styled.div `
    width: 98%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    bottom: 0;
    height: 52px;
    background-color: #282828;
    padding: 20px;
`;

export const Div = styled.div `
`;

export const Image = styled.img `
    width: 50px;
    height: 50px;
    margin-right: 20px;
    object-fit: contain;
`;

export const Button = styled.button ``;

export const Footer_Left = styled.div `
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    max-width: 300px;
`;

export const Footer_Center = styled.div `
    flex: 0.4;
    padding: 0 100px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 250px;
`;

export const Footer_Right = styled.div `
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
`;

export const Text = styled.p `
    font-size: 12px;
`;

export const H4 = styled.h4 `
    margin-bottom: 5px;
`;
