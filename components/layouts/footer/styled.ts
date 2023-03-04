import styled from 'styled-components';
import { Indents } from '@/components/styles';

export const StyledFooter = styled.footer`
  width: 100%;
  height: ${({theme}) => theme.footerHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
  ${Indents}
`;

export const Container = styled.div`
  max-width: ${({theme}) => theme.viewports.desktopWidth};
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  color: ${({theme}) => theme.colors.baseWhite};
`;

export const Link = styled.a`
  text-decoration: underline;

  &:visited {
    color: ${({theme}) => theme.colors.baseWhite};
  }
`;
