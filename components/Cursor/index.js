import React, {useEffect, useCallback, useState} from 'react'
import styled, { keyframes } from 'styled-components'

const Cursor = (props) => {
    const focus = props.focus ? <FlashingCursor /> : null

    const keyPress = useCallback((e) => {
        switch(e.keyCode) {
            case 36:
                e.preventDefault()
                break;
            case 36:
                e.preventDefault()
                break;
            case 37:
                e.preventDefault()
                break;
            case 38:
                e.preventDefault()
                break;
            case 39:
                e.preventDefault()
                break;
            case 40:
                e.preventDefault()
                break;
            default:
        }
      }, []);

      useEffect(() => {
        document.addEventListener("keydown", keyPress, false);

        return () => {
          document.removeEventListener("keydown", keyPress, false);
        };
      }, []);

    return (
        <React.Fragment>
            {focus}
        </React.Fragment>
    )

}

export default Cursor

const blink = keyframes`
    from { opacity: 1}
    to { opacity: 0}
`

const FlashingCursor = styled.span`
    background-color: white;
    width: 8px;
    height: 14px;
    display: inline-block;
    animation: ${blink} 1s linear infinite;
`
