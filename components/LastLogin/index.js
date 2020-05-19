import React from 'react'
import styled from 'styled-components'


const LastLogin = () => {
    const tmzReplace = /(\w{3}-\d{4}).*/
    return (
        <Login>Last login: {new Date().toString().replace(tmzReplace, '')} on console</Login>
    )
}

export default React.memo(LastLogin)


const Login = styled.p`
    color: ${({theme}) => theme.text};
    padding: 0;
    margin: 0;
`