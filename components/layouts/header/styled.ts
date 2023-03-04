import styled from 'styled-components';
import { Indents } from '@/components/styles';

export const StyledHeader = styled.header`
  min-height: ${({theme}) => theme.headerHeight};
  padding: 11px 0 11px;
  background-color: ${({theme}) => theme.colors.secondary};
  position: fixed;
  z-index: 2;
  width: 100%;
  ${Indents}
`;
