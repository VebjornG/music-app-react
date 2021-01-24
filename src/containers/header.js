import React from "react"
import { Header } from '../components'

export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Button>
                <Header.Image/>
            </Header.Button>

            <Header.Text value={message}>{message.toUpperCase()}</Header.Text>

            <Header.Button>
                <Header.Image/>
            </Header.Button>

            {children}
        </Header>
    )
}