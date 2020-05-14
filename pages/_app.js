import React, { useState } from 'react'
import Layout from '../components/Layout'
import { darkTheme, lightTheme } from '../utils/theme/theme'
import { ThemeProvider } from 'styled-components';
import '../css/global.css'



function App(props) {
    const [theme, setTheme] = useState('dark')
    const { Component, pageProps } = props

    const handleThemeToggle = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    return(
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            <Layout handleToggle={handleThemeToggle}>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
  }


  export default App