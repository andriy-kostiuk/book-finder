import { ITheme } from '@/interfaces/theme';

export const theme: ITheme = {
  colors: {
    primary: '#7694f5',
    secondary: '#03396c',
    baseWhite: '#ffffff',
    baseBlack: '#000000',
    hover: '#6497b1',
    active: '#005b96',
    googlePlay: '#e67a00',
    amazon: '#141236',
  },
  viewports: {
    mobileWidth: '320px',
    maxMobileWidth: '767px',
    tabletWidth: '768px',
    laptopWidth: '1024px',
    desktopWidth: '1440px',
  },
  pageIndents: {
    mobilePadding: '10px',
    tabletPadding: '30px',
    laptopPadding: '30px',
    desktopPadding: '0',
  },
  font: {
    fontFamily: 'Comfortaa',
    fontSize: '16px',
    lineHeight: '1.5',
    fontWeight: '400',
  },
  footerHeight: '60px',
  headerHeight: '60px',
};
