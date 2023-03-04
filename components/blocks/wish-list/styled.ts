import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin: 20px 0 30px;
  color: ${({theme}) => theme.colors.baseWhite};
`;

export const Title = styled.h1`
  margin: 0;
`;

export const Text = styled.p`
  margin: 0;
  text-align: center;
`;
