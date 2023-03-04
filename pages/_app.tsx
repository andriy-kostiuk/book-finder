import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/theme/theme';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from '@/styles/global';
import { wrapper } from '@/store/store';
import { Provider } from 'react-redux';
import PageWrapper from '@/components/layouts/page-wrapper/page-wrapper';


export default function App({Component, ...rest}: AppProps) {
  const {store, props} = wrapper.useWrappedStore(rest);


  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Book finder</title>
    </Head>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Normalize />
        <PageWrapper>
          <Component {...props.pageProps} />
        </PageWrapper>
      </ThemeProvider>
    </Provider>
  </>;
}
