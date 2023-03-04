import React, { FC } from 'react';
import { INavItem } from '@/interfaces/nav-item';
import { Icon, StyledLink, Text } from '@/components/ui/nav-item/styled';
import SharedSvgIcons from '@/components/shared/shared-svg-icons/shared-svg-icons';

interface Props extends INavItem {
}

const NavItem: FC<Props> = ({href, title, icon}) => {
  return (
    <StyledLink href={href}>
      <Icon>
        <SharedSvgIcons width={18} height={18} id={icon} />
      </Icon>
      <Text>
        {title}
      </Text>
    </StyledLink>
  );
};

export default NavItem;
