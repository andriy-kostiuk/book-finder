import React, { FC, useState } from 'react';
import NavItem from '@/components/ui/nav-item/nav-item';
import { INavItem } from '@/interfaces/nav-item';
import { NavToggle, StyledNav, Ul } from './styled';
import HiddenElement from '@/components/ui/hidden-element/hidden-element';

const navItems: INavItem[] = [
  {
    title: 'Знайти',
    href: '/',
    icon: 'search',
  },
  {
    title: 'Спипсок бажань',
    href: '/wish-list',
    icon: 'heart',
  },
];

const Nav: FC = () => {
  const [isOpenNav, setIsOpenNav] = useState<boolean>(false);

  const toggleNav = () => {
    setIsOpenNav(!isOpenNav);
  };

  return (
    <StyledNav>
      <NavToggle $isOpenNav={isOpenNav} onClick={toggleNav}>
        <HiddenElement>
          {isOpenNav ? 'Закрити меню' : 'Відкрити меню'}
        </HiddenElement>
      </NavToggle>
      <Ul $isOpenNav={isOpenNav}>
        {navItems.map((props) => <li key={props.href}><NavItem {...props} /></li>)}
      </Ul>
    </StyledNav>
  );
};

export default Nav;
