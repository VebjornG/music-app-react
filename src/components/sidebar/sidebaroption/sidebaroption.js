import React from "react"
import { Container, Text, TextH4, IconStyle } from "./sidebaroption-styles"

export default function SidebarOption({ title, Icon }) {
    return (
        <>
            <Container>
                {/*<Icon/> <TextH4>{title}</TextH4>*/}
                    {/*Icon && <></>*/}
                {<IconStyle>{Icon && <Icon/>}</IconStyle>}
                    {/*<TextH4>{Icon && title}</TextH4>*/}
                {Icon ? <Text>{title}</Text> : <Text><Icon/>{title}</Text>}
            </Container>
        </>
    ) 
}