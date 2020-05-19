import React from 'react'
import styled from 'styled-components'

const Heading = (props) => {
    return (
        <HeadingText>
            {props.children}
        </HeadingText>
    )
}

export default Heading


const HeadingText = styled.h1`
    color: ${({ theme }) => theme.headingText};
    font-size: 28px;
`