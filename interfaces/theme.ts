interface Viewports {
  mobileWidth: string;
  tabletWidth: string;
  laptopWidth: string;
  desktopWidth: string;
}

interface Font {
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
}

interface PageIndents {
  mobilePadding: string;
  tabletPadding: string;
  laptopPadding: string;
  desktopPadding: string;
}

export interface ITheme {
  colors: {
    [name: string]: string
  };
  viewports: Viewports;
  font: Font;
  pageIndents: PageIndents;
  headerHeight: string;
  footerHeight: string;
}
