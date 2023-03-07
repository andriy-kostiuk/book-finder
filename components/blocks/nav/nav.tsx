import React, { FC, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import NavItem from '@/components/ui/nav-item/nav-item';
import { INavItem } from '@/interfaces/nav-item';
import { StyledNav, MobileList, TabletAndMostList } from './styled';
import { useTheme } from 'styled-components';
import { MenuButton } from '@/components/ui/menu-btn/menu-btn';

const navItemsData: INavItem[] = [
  {
    title: 'Знайти',
    href: '/',
    icon: 'search',
  },
  {
    title: 'Список бажань',
    href: '/wish-list',
    icon: 'heart',
  },
];

const Nav: FC = () => {
  const [isOpenNav, setIsOpenNav] = useState<boolean>(false);
  const {colors} = useTheme();

  const navItems = navItemsData.map((props) => <motion.li whileHover={{scale: 1.1}}
                                                          whileTap={{scale: 1}}
                                                          key={props.href}>
    <NavItem {...props} />
  </motion.li>);

  return (
    <StyledNav>
      <MenuButton isOpen={isOpenNav}
                  onClick={() => setIsOpenNav(!isOpenNav)}
                  width={30} height={30}
                  strokeWidth={3}
                  color={colors.primary}
      />
      <AnimatePresence initial={false}>
        {isOpenNav && <MobileList
          initial={{height: 0}}
          animate={{height: 'auto'}}
          exit={{height: 0}}
          transition={{duration: 0.5}}
        >
          {navItems}
        </MobileList>}
      </AnimatePresence>
      <TabletAndMostList>{navItems}</TabletAndMostList>
    </StyledNav>
  );
};

export default Nav;
