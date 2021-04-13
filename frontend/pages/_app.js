import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page/';
import '../components/styles/nprogress.css';
import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';
import { CartStateProvider } from '../lib/cartState';
import { CreateEventStateProvider, useCreateEvent } from '../lib/createEventState';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <CreateEventStateProvider>
        <CartStateProvider>
          <Page>
            <Component {...pageProps} />
          </Page>
        </CartStateProvider>
      </CreateEventStateProvider>
    </ApolloProvider>
  )
}

MyApp.getInitialProps = async function({ Component, ctx }) {
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  pageProps.query = ctx.query
  return { pageProps }
}

export default withData(MyApp)