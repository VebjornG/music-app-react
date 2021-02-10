import styled from "styled-components"

import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export const Container = styled.div `
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`;

export const HeaderLeft = styled.div `
    flex: 0.5;
    display: flex;
    background-color: white;
    padding: 10px;
    border-radius: 30px;
    color: gray;
    align-items: center;
`;

export const Input = styled.input `
    border: none;
    width: 100%;
`;

export const HeaderRight = styled.div `
    display: flex;
    align-items: center;
`;

export const StyledAvatar = styled(Avatar) ``;

export const StyledSearchIcon = styled(SearchIcon) ``;

export const H4 = styled.h4 `
    margin-left: 10px;
`;
