import styled from 'styled-components'
import { device } from '@styles/breakpoints'

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: var(--header-height);
  width: 100%;
  background-color: var(--bg-primary);
  border-bottom: 2px solid var(--bg-secondary);
  z-index: 100000000000000000;
  
  & h1 {
    margin: 0;
    font-size: 2rem;
    font-weight: 800;
  }
  
  @media ${device.tablet} {
    padding: 0 calc(var(--header-height) / 2) 0;
    justify-content: space-between;
  }
`
