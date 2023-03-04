import React, { FC } from 'react';
import { StyledFooter, Container, Link } from '@/components/layouts/footer/styled';
import SharedSvgIcons from '@/components/shared/shared-svg-icons/shared-svg-icons';


const Footer: FC = () => {
  return (
    <StyledFooter>
      <Container>
        Зроблено з
        <div>
          <SharedSvgIcons width={20} height={20} id={'heart'} />
        </div>
        від
        <Link href={'https://github.com/A-Kostiuk'}>Andrii Kostiuk</Link>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
