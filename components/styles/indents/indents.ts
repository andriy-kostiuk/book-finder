import { css } from 'styled-components';

const Indents = css`
  padding-left: ${({theme}) => theme.pageIndents.mobilePadding};
  padding-right: ${({theme}) => theme.pageIndents.mobilePadding};

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    padding-left: ${({theme}) => theme.pageIndents.tabletPadding};
    padding-right: ${({theme}) => theme.pageIndents.tabletPadding};
  }

  @media (min-width: ${({theme}) => theme.viewports.laptopWidth}) {
    padding-left: ${({theme}) => theme.pageIndents.laptopPadding};
    padding-right: ${({theme}) => theme.pageIndents.laptopPadding};
  }

  @media (min-width: ${({theme}) => theme.viewports.desktopWidth}) {
    padding-left: ${({theme}) => theme.pageIndents.desktopPadding};
    padding-right: ${({theme}) => theme.pageIndents.desktopPadding};
  }
`;
export default Indents;
