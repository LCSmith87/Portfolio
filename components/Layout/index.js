import React from 'react'
import styled from 'styled-components'
import NavBar from '../NavBar'

const Layout = ({ children, handleToggle }) => {
    return (
        <MainLayout>
            <NavBar handleToggle={handleToggle} />
            <MainView>
                {children}
            </MainView>
        </MainLayout>
    )
}

export default Layout

const MainLayout = styled.div`


    @media (min-width: 640px) {
        display: flex;
        flex-direction: row;
    }
`

const MainView = styled.main`

    transition: background-color 0.5s;
    background-color: ${({ theme }) => theme.bg};
    height: 100vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @media (min-width: 640px) {
        width: 100%;
    }
`