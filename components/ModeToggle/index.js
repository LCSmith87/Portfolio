import React, { useState } from 'react'
import styled, {withTheme} from 'styled-components'
import { useSpring, animated } from 'react-spring'

const ModeToggle = ({ theme }) => {
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 }
    })

    return (
        <div onClick={() => set(state => !state)} style={{width: '32px', height: '32px', position: 'relative', cursor: 'pointer'}}>
            <animated.div style={{ position: 'absolute', opacity: opacity.interpolate(o => 1 - o), transform }}>
                <Icon src={theme.iconPath} />
            </animated.div>
            <animated.div style={{ position: 'absolute', opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
                <Icon src={theme.iconPath} />
            </animated.div>

        </div>
    )
}

export default withTheme(ModeToggle)

const Icon = styled.img`
    width: 100%;
    height: 100%;
    @media (min-width: 640px) {
        padding-top: 20px;
    }
`

