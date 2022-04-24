import styled from 'styled-components';

export const WrapperStyled = styled.div`
  height: 100vh;
  padding-top: var(--header-height);
  color: var(--font-primary);
  background-color: var(--bg-primary);

`;

export const ContentStyled = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  
  .content-children-container {
    width: 100%;
  }
`;
