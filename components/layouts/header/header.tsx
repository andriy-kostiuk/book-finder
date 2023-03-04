import React, { FC } from 'react';
import Nav from '@/components/blocks/nav/nav';
import { StyledHeader } from '@/components/layouts/header/styled';

const Header: FC = () => {
  return (
    <StyledHeader>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
