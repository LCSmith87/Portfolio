import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import NavBar from '../NavBar'

const Layout = ({ children, handleToggle }) => {
    return (
        <div className="container">
            <NavBar handleToggle={handleToggle} />
            <div className="main">
                {children}
            </div>
        </div>
    )
}

export default Layout