import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styled/GlobalsStyle'
import { wrapper } from '@/redux/store'
import { Provider } from 'react-redux'

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props

  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  )
}
