import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  top: 5px;
  right: 0;
  box-shadow: none;
  cursor: pointer;
  z-index: 1;
  padding: 0;

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    display: none;
  }
`;
