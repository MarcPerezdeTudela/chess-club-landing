import type { AppProps } from 'next/app'
import { Theme } from '@/providers/themeProvider'
import { Layout } from '@/layouts/MainLayout/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </>
  )
}

export default MyApp
