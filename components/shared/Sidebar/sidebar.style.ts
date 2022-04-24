import { device } from '@styles/breakpoints';
import styled from 'styled-components';

export const AsideStyled = styled.aside`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  height: calc(var(--header-height) / 1.2);
  width: 100%;

  border-top: 2px solid var(--bg-secondary);

  & > a {
    display: flex;
    align-items: center;
    text-align: center;
    width: 100%;
    aspect-ratio: 1;

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3rem;
      aspect-ratio: 1;
      margin: 0 auto;

      border-radius: 6px;
      transition: background-color 0.16s ease-in-out;

    }

    &:hover > div {
      background-color: var(--bg-secondary);
    }
  }

  @media ${device.tablet} {
    position: relative;
    bottom: auto;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    max-width: var(--header-height);
    width: var(--header-height);
    
    border-top: 0;
  }
`;
