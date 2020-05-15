import React from 'react'
import styled from 'styled-components'
import ModeToggle from '../ModeToggle'

const NavBar = ({ handleToggle }) => {
    return (
        <React.Fragment>
            <Nav>
                <div onClick={handleToggle}>
                    <ModeToggle />
                </div>
            </Nav>
        </React.Fragment>
    )
}

export default NavBar

const Nav = styled.div`
    /* Temporary styles just to get layout before theme */
    background-color: ${({ theme }) => theme.nav};
    height: 60px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    @media (min-width: 640px) {
        width: 60px;
        height: 100vh;
        flex-direction: column;
        align-items: center;
    }
`
