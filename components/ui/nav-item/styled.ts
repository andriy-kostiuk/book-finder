import Link from 'next/link';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  padding: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
  text-decoration: none;
  border-radius: 5px;
  
  &:hover {
    background-color: ${({theme}) => theme.colors.hover};
  }

  &:active {
    background-color: ${({theme}) => theme.colors.active};
  }
`

export const Icon = styled.div`
  line-height: 0;
`

export const Text = styled.p`
  color: ${({theme}) => theme.colors.baseWhite};
  margin: 0;
  line-height: 1;
`
