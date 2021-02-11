import styled from "styled-components"

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";


export const StyledPlayCircleFilledIcon = styled(PlayCircleFilledIcon) `
  font-size: 65px !important;
  margin-left: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #1ed15e;
  
  &:hover {
    transition: 100ms transform ease-in;
    transform: scale(1.08);
  }
`;

export const StyledFavoriteIcon = styled(FavoriteIcon) `
    color: #1ed15e;

    &:hover {
        transition: 100ms transform ease-in;
        transform: scale(1.08);
      }
`;

export const StyledMoreHorizIcon = styled(MoreHorizIcon) `
    &:hover {
        transition: 100ms transform ease-in;
        transform: scale(1.08);
    }
`;

export const Container = styled.div `
    flex: 0.875;
    overflow-y: overlay;
    color: #fff;
    height: 100vh;
    width: 100%;
    padding: 30px;
    background: linear-gradient(rgb(91, 87, 115), rgba(0,0,0,1));
    background-color: #121212

    &::-webkit-scrollbar {
        display: none;
    }
    
`;

export const H2 = styled.h2 `
    font-size: 48px;
    margin-bottom: 10px;
    font-weight: bold;
`;

export const Text = styled.p `
    font-size: 14px;
`;

export const BodyInfo = styled.div `
    display: flex;
    align-items: flex-end;
    padding: 10px;
`;

export const Image = styled.img `
    height: 20vw;
    margin: 0 20px;
    box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
`;

export const BodyInfoText = styled.div `
    flex: 1;
`;

export const BodySongs = styled.div `
    z-index: 1;
    margin: 20px -30px;
`;

export const BodyIcons = styled.div `
  display: flex;
  align-items: center;

  & .MuiSvgIcon-root {
        margin-right: 30px;
    }
`;