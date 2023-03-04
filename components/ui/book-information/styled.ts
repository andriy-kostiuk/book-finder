import styled from 'styled-components';

export const Text = styled.p`
  margin: 0;

  &:not(&:last-child) {
    margin-bottom: 10px;
  }
`;
