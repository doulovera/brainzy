import React from 'react';
import { ThemeProvider } from 'styled-components';
// store
import { useStore } from 'store/theme';
// global styles
import { GlobalStyles } from '@styles/globals';
import { darkMode, lightMode } from '@styles/colors';
// styles
import { WrapperStyled } from './layout.style';
// components
import Header from '@components/shared/Header';

type Props = {
  children: React.ReactNode,
}

export default function DashboardLayout ({ children }: Props) {
  const { theme } = useStore();

  return (
    <ThemeProvider theme={theme === 'dark' ? darkMode : lightMode}>
      <GlobalStyles />
      <WrapperStyled>
        <Header />
        {children}
      </WrapperStyled>
    </ThemeProvider>
  );
}
