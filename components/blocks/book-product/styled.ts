import styled from 'styled-components';
import NextImage from 'next/image';

export const Section = styled.section`
  margin-bottom: 50px;
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
  margin-bottom: 30px;
  color: ${({theme}) => theme.colors.baseWhite};

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Title = styled.h1`
  color: ${({theme}) => theme.colors.baseWhite};
  margin: 0;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({theme}) => theme.colors.baseWhite};

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    flex-direction: row;
    gap: 50px;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

export const ShortDesk = styled.p`
  margin: 0;
`;

export const Image = styled(NextImage)`
  object-fit: cover;
  align-self: center;
  background-color: ${({theme}) => theme.colors.baseWhite};

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    align-self: flex-start;
  }
`;
