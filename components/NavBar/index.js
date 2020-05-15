import React from 'react'
import styled from 'styled-components'
import ModeToggle from '../ModeToggle'

const NavBar = ({ handleToggle }) => {
    return (
        <React.Fragment>
            <Nav>
                <div>
                    <div onClick={handleToggle}>
                        <ModeToggle />
                    </div>
                 </div>
                <ImageWrapper>
                    <a href="https://www.linkedin.com/in/levicodysmith/" ><Image src='/img/linkedin.png' alt="LinkedIn Icon" /></a>
                    <a href="https://github.com/LCSmith87/"><Image src='/img/github.png' alt="GitHub Icon" /></a>
                </ImageWrapper>

            </Nav>
        </React.Fragment>
    )
}

export default NavBar

const Nav = styled.div`
    background-color: ${({ theme }) => theme.nav};
    height: 60px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding-right: 15px;
    @media (min-width: 640px) {
        width: 60px;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        padding-right: 0;
    }
`

const Image = styled.img`
    width: 45px;
    height: 45px;
`

const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    @media (min-width: 640px) {
        flex-direction: column;
        padding-bottom: 15px;
    }
`
