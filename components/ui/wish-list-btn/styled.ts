import styled, { css } from 'styled-components';

interface IButton {
  $availability: boolean;
  $marginBottom?: number;
}

export const Button = styled.button<IButton>`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: ${(props) => props.$marginBottom ? `${props.$marginBottom}px` : 0};
  border: none;
  background-color: inherit;
  cursor: pointer;
  color: inherit;

  ${(props) => props.$availability ?
          css`
            svg path {
              fill: red;
            }
          ` : css`
            svg path {
              fill: gray;
            }
          `}
  p {
    margin: 0;
  }
`;
