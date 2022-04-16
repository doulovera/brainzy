import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useStore } from 'store/theme';

import { GlobalStyles } from '@styles/globals';
import { darkMode, lightMode } from '@styles/colors';

import { WrapperStyled } from './layout.style';

type Props = {
  children: React.ReactNode,
}

export default function DashboardLayout ({ children }: Props) {
  const { theme } = useStore();

  return (
    <ThemeProvider theme={theme === 'dark' ? darkMode : lightMode}>
      <GlobalStyles />
      <WrapperStyled>
        {children}
      </WrapperStyled>
    </ThemeProvider>
  );
}
