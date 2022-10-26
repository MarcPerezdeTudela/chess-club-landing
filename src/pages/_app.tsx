import type { AppProps } from 'next/app'
import { Theme } from '@/providers/themeProvider'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  )
}

export default MyApp
