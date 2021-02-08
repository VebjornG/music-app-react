import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    align-items: center;
    color: grey;
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
`;

export const TextH4 = styled.h4 `
    /*&:hover {
        color: white;
        cursor: pointer;
        transition: 200ms color ease-in;
    }*/
`;