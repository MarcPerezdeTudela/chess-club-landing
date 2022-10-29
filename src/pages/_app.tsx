import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Theme } from '@/providers/themeProvider'
import { Layout } from '@/layouts/MainLayout/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Chess Club</title>
      </Head>
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </>
  )
}

export default MyApp
