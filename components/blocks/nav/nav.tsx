import React, { FC, useState } from 'react';
import NavItem from '@/components/ui/nav-item/nav-item';
import { INavItem } from '@/interfaces/nav-item';
import { NavToggle, NavToggleLabel, StyledNav, Ul } from './styled';

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
        <NavToggleLabel>
          {isOpenNav ? 'Закрити меню' : 'Відкрити меню'}
        </NavToggleLabel>
      </NavToggle>
      <Ul $isOpenNav={isOpenNav}>
        {navItems.map((props) => <li key={props.href}><NavItem {...props} /></li>)}
      </Ul>
    </StyledNav>
  );
};

export default Nav;
