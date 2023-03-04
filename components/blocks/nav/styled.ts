import styled, { css } from 'styled-components';
import { VisuallyHidden } from '@/components/styles';

interface INavToggle {
  $isOpenNav: boolean;
}

export const StyledNav = styled.nav`
  position: relative;
  max-width: ${({theme}) => theme.viewports.desktopWidth};
  margin: auto;
  padding-left: 35px;

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    padding-left: 0;
  }
`;

export const Ul = styled.ul<INavToggle>`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
  list-style: none;
  padding: 0;
  justify-content: end;

  ${(props) => props.$isOpenNav ? null : css`
    display: none;
    @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
      display: flex;
    }
  `}
`;

export const NavToggle = styled.button<INavToggle>`
  position: absolute;
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  top: 5px;
  right: 0;
  box-shadow: none;
  cursor: pointer;
  z-index: 1;

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    display: none;
  }
  ${(props) => props.$isOpenNav ?
          css`
            left: 0;

            &:before, &:after {
              content: "";
              position: absolute;
              left: 0;
              width: 30px;
              height: 4px;
              background-color: ${({theme}) => theme.colors.primary};
            }

            &:before {
              transform: rotate(45deg);
            }

            &:after {
              transform: rotate(-45deg);
            }

          ` :
          css`
            &:before {
              content: "";
              position: absolute;
              width: 30px;
              height: 6px;
              background-color: ${({theme}) => theme.colors.primary};
              top: 0;
              left: 0;
              box-shadow: 0 12px 0 0 ${({theme}) => theme.colors.primary}, 0 24px 0 0 ${({theme}) => theme.colors.primary};
            }
          `}
`;

export const NavToggleLabel = styled.span`
  ${VisuallyHidden}
`;
