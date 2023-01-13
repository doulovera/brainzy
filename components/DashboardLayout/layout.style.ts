import styled from 'styled-components'
import { device } from '@styles/breakpoints'

export const WrapperStyled = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  color: var(--font-primary);
  background-color: var(--bg-primary);
`

export const ContentStyled = styled.div`
  position: relative;
  height: calc(100% - var(--header-height));
  padding: var(--header-height) 0;

  & > main {
    height: 100%;
    @media ${device.tablet} {
      width: calc(100% - var(--header-height));
      margin-left: var(--header-height);
    }
  }
`
