import styled, { css } from 'styled-components';

interface ILink {
  $type: 'googlePlay' | 'amazon';
}

export const Link = styled.a<ILink>`
  color: ${({theme}) => theme.colors.baseWhite};
  display: inline-block;
  padding: 10px 25px;
  text-decoration: none;
  border-radius: 5px;
  align-self: center;

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth} ) {
    align-self: self-start;
  }


  ${(props) => {
    switch (props.$type) {
      case 'googlePlay' :
        return css`
          background-color: ${({theme}) => theme.colors.googlePlay};
        `;
      case 'amazon' :
        return css`
          background-color: ${({theme}) => theme.colors.amazon};
        `;
      default :
        return null;
    }
  }}

  background-color: ${({theme}) => theme.colors};
`;
