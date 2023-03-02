import styled from 'styled-components';
import { Indents } from '@/components/styles';

export const Container = styled.div`
  max-width: ${({theme}) => theme.viewports.desktopWidth};
  margin: 0 auto;
  display: flex;
  ${Indents}
`;
