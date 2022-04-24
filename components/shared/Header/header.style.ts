import styled from 'styled-components';
import { device } from '@styles/breakpoints';

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--header-height);
  width: 100%;
  
  & h1 {
    font-size: 2rem;
    font-weight: 800;
  }
  
  @media ${device.tablet} {
    padding-left: var(--header-height);
    justify-content: flex-start;
  }
`;
