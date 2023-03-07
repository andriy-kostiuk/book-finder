import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  position: relative;
  max-width: ${({theme}) => theme.viewports.desktopWidth};
  margin: auto;
  padding-right: 35px;

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    padding-right: 0;
  }
`;

const Ul = styled(motion.ul)`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
  list-style: none;
  padding: 0;
  justify-content: start;
  overflow: hidden;
`;

export const MobileList = styled(Ul)`
  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    display: none;
  }`;

export const TabletAndMostList = styled(Ul)`
  display: none;
  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    display: flex;
    justify-content: end;
    overflow: visible;
  }
`;
