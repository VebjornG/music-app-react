import React from "react"
import { Container, Image, Text, Button} from "./styles/header"

export default function Header({children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.Button = function HeaderButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Header.Image = function HeaderImage({ src, ...restProps }) {
    return <Image {...restProps}  src={`/images/${src}.png`}/>
}

