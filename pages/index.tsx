import Head from 'next/head'
import { ReactElement } from 'react'
import Layout from '../src/components/layout'
import { siteTitle } from '../src/constants'

const Home = (): ReactElement => (
  <Layout>
    <Head>
      <title>{siteTitle}</title>
    </Head>
  </Layout>
)

export default Home
