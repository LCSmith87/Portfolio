import React from 'react'
import styled from 'styled-components'

const MainView = ({ children }) => {
    return (
        <Main>
            {children}
        </Main>
    )
}

export default MainView

const Main = styled.main`

    background-color: ${({ theme }) => theme.bg};
    height: 100vh;
    @media (min-width: 640px) {
        width: 100%;
    }
`
