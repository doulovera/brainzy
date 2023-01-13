import React from 'react'
import { ThemeProvider } from 'styled-components'
// store
import { useStore } from 'store/theme'
// global styles
import { GlobalStyles } from '@styles/globals'
import { darkMode, lightMode } from '@styles/colors'
// styles
import { ContentStyled, WrapperStyled } from './layout.style'
// components
import Header from '@components/shared/Header'
import Sidebar from '@components/shared/Sidebar'
import Head from 'next/head'

type Props = {
  children: React.ReactNode,
  title?: string;
}

export default function DashboardLayout ({ children, title = 'Dashboard' }: Props) {
  const { theme } = useStore()

  return (
    <>
      <Head>
        <title>{title} - Brainzy</title>
      </Head>
      <ThemeProvider theme={(theme === 'dark') ? darkMode : lightMode}>
        <GlobalStyles />
        <WrapperStyled>
          <Header />
          <ContentStyled>
            <Sidebar />
            <main>
              {children}
            </main>
          </ContentStyled>
        </WrapperStyled>
      </ThemeProvider>
    </>
  )
}
