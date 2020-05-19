import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import LastLogin from '../LastLogin'
import Cursor from '../Cursor'

const Terminal = ({title, value}) => {
    const [text, setText] = useState( value ? value : "")
    const inputRef = React.createRef()

    useEffect(() => {
        setFocus()
    },[])
    const setFocus = () => {
        inputRef.current.focus()
    }
    return (
        <Term onClick={() => setFocus()}>
            <Header>
                <span>{`Terminal -- ${title} -- 80x24`}</span>
            </Header>
            <Inside>
                <LastLogin />
                <PromptWrapper>
                    <UserPrompt>user@levismith.dev:~$ {text}<Cursor focus={true} />
                            <UserInput
                                type="text"
                                value={text}
                                onBlur={() => setFocus()}
                                autoFocus
                                onChange={(e) => setText(e.target.value)}
                                ref={inputRef}
                            />
                    </UserPrompt>
                </PromptWrapper>
            </Inside>
        </Term>
    )
}

export default Terminal

const Term = styled.div`
    background-color: ${({ theme }) => theme.terminal};
    width: 100%;
    height: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border: 1px solid #33373b;

`

const Header = styled.header`
    height: 25px;
    width: 100%;
    background-color: #bcbcbc;
    color: #1d1215;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    text-align: center;
`

const Inside = styled.div`
    padding: 5px;
`

const UserPrompt = styled.p`
    color: ${({theme}) => theme.text};
    padding: 0;
    margin: 0;
    word-break: break-all;
`

const UserInput = styled.input`
    background: none;
    outline: 0;
    border: 0;
    padding: 0;
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
`

const PromptWrapper = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;

`
