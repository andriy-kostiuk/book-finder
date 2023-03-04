import styled from 'styled-components';

export const StyledBooksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;


  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({theme}) => theme.viewports.laptopWidth}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const BooksListItem = styled.li`
  background-color: ${({theme}) => theme.colors.baseWhite};
  border-radius: 10px;
  padding: 10px 20px 20px 20px;
`;
