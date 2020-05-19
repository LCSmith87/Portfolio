import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Btn = (props) => {
    return (
        <Button>
            <span>{props.children}</span>
        </Button>
    )
}

export default Btn

const Button = styled.a`
    background-color: ${({theme}) => theme.button};
    color: ${({theme}) => theme.buttonText};
    box-shadow: 3px 3px 0px 1px ${({theme}) => theme.buttonShadow};
    min-width: 150px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    margin: 5px 5px;
    cursor: pointer;

    &:hover {
        background-color: ${({theme}) => theme.buttonHover};
        color: ${({theme}) => theme.buttonHoverText};
    }

    &:active {
        transform: translateY(4px);
        box-shadow: 1px 1px 0px 0px ${({theme}) => theme.buttonShadow};
    }

    @media (min-width: 640px) {
        max-width: 200px;
    }

`