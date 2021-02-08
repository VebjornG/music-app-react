import styled from "styled-components"

export const Container = styled.div `
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
    flex: 0.125;
    min-width: 230px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #040404;
`;

export const Image = styled.img `
    object-fit: contain;
    width: 59%;
    padding: 20px;
    margin-right: auto;
    /*margin-top: 1.9rem;
    margin-left: 1rem;*/
`;

export const ButtonContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const PlayListButtons = styled.div `
    
`;

export const Button = styled.button `
`;

export const Ul = styled.ul ``;

export const List = styled.li `
    color: #fff;
`;

export const Strong = styled.strong `
    color: #adadad;
    font-size: 11px;
    letter-spacing: 1px;
    font-weight: bold;
    margin-left: 16px;
`;

export const Hr = styled.hr `
    border: 1px solid #282828;
    height: 0px;
    width: 90%;
    margin: 10px auto;
`;
