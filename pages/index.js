import React from 'react'
import Head from 'next/head'
import Heading from '../components/Heading'
import styled from 'styled-components'
import Btn from '../components/Btn'
import Terminal from '../components/Terminal'

const Home = () => {
  return (
    <React.Fragment>
        <Head>
            <title>Levi Smith, Front End Developer</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Wrapper>
                <Heading>
                    Levi Smith, Front End <Highlight>Developer</Highlight>, and SEO Tinkerer.
                </Heading>
                <ButtonList>
                    <ButtonWrapper>
                        <Btn>
                            About
                        </Btn>
                        <Btn>
                            Resume
                        </Btn>
                    </ButtonWrapper>
                    <ButtonWrapper>
                        <Btn>
                            Portfolio
                        </Btn>
                        <Btn>
                            Projects
                        </Btn>
                    </ButtonWrapper>
                </ButtonList>
                <TerminalWrapper>
                    <Terminal title="Home" />
                </TerminalWrapper>
        </Wrapper>
    </React.Fragment>

  )
}

export default Home

const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 20px;
`


const Highlight = styled.span`
    color: ${({ theme }) => theme.red};
`

const ButtonList = styled.div`
    display: flex;
    flex-flow: column;
    @media (min-width: 640px) {
        flex-direction: row;
    }

`

const ButtonWrapper = styled.div`
    padding: 0;
    display: flex;
    flex-direction: row;
`

const TerminalWrapper = styled.div`
    width: 100%;
    padding-top: 20px;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    margin-bottom: 40px;
    @media (min-width: 640px) {
        width: 50%;
    }
`