import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    align-items: center;
    color: #adadad;
    padding: 0 10px;
    &:hover {
        color: white;
        cursor: pointer;
        transition: 200ms color ease-in;
    }
`;

export const IconStyle = styled.div `
    padding: 0 10px;
`;

export const Text = styled.p `
    font-size: 14px;
`;

export const TextH4 = styled.h4 `
    font-size: 14px;
    /*&:hover {
        color: white;
        cursor: pointer;
        transition: 200ms color ease-in;
    }*/
`;