import { createGlobalStyle } from 'styled-components'

type ThemeType = {
  bgPrimary: string;
  bgSecondary: string;
  fontPrimary: string;
  fontSecondary: string;
}

export const GlobalStyles = createGlobalStyle<{theme: ThemeType}>`

  :root {
    --bg-primary: ${({ theme }) => theme.bgPrimary};
    --bg-secondary: ${({ theme }) => theme.bgSecondary};
    --font-primary: ${({ theme }) => theme.fontPrimary};
    --font-secondary: ${({ theme }) => theme.fontSecondary};

    --header-height: 5rem;
  }


  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .icon.icon-tabler {
    font-size: 1.4rem;
  }
`
