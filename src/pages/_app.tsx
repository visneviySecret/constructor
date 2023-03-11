import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styled/GlobalsStyle'
import { wrapper } from '@/redux/store'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(App)
