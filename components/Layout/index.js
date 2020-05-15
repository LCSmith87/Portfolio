import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import NavBar from '../NavBar'
import Main from '../MainView'

const Layout = ({ children, handleToggle }) => {
    return (
        <MainLayout>
            <NavBar handleToggle={handleToggle} />
            <Main>
                {children}
            </Main>
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