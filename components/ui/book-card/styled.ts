import styled from 'styled-components';
import Link from 'next/link';

export const BookLink = styled(Link)`
  display: block;
  text-align: center;
  color: inherit;
  text-decoration: none;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;

export const BookDescription = styled.div`
  display: flex;
  gap: 15px;
`;

export const Img = styled.img`
  object-fit: contain;
  width: 128px;
  height: auto;
`;
