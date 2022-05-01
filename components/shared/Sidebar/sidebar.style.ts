import { device } from '@styles/breakpoints';
import styled from 'styled-components';

export const AsideStyled = styled.aside`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: var(--header-height);
  width: 100%;
  background-color: var(--bg-primary);
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
    left: 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: calc(100% - var(--header-height));
    width: var(--header-height);
    border: 0;

  }
`;
