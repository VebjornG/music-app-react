import React from "react"
import { Container, Background, Image, Text } from "./styles/header"

export default function Header({bg = true, children, ...restProps }) {
    return bg ? <Background {...restProps}>{children}</Background> : children;
}