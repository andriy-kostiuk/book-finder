import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import Header from '@/components/layouts/header/header';
import Footer from '../footer/footer';
import { Indents } from '@/components/styles';

interface Props {
  children: ReactElement;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr min-content;
  min-height: 100vh;
`;

const Main = styled.main`
  background-color: ${({theme}) => theme.colors.primary};
  padding-top: ${({theme}) => theme.headerHeight};
`;

const Container = styled.div`
  max-width: ${({theme}) => theme.viewports.desktopWidth};
  margin: 0 auto;
  ${Indents}
`;

const PageWrapper: FC<Props> = ({children}) => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Container>
          {children}
        </Container>
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default PageWrapper;
