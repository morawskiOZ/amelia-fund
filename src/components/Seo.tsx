import * as React from 'react'
import { FC } from 'react'
import Head from 'next/head'
import { siteDesc, siteTitle } from '../constants'

export const Seo: FC = () => {
  return (
    <Head>
      <title>{siteTitle}</title>
      <html lang="en" />
      <meta name="description" content={siteDesc} />
      <meta property="og:image" content="src" />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content="1%, podatek, białaczka, Wrocław, Amelia, przekaż, PIT, Morawska"
      />
      <meta
        name="robots"
        content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <link rel="canonical" href="https://ameliamorawska.pl" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:url" content="https://ameliamorawska.pl" />
      <meta
        property="og:site_name"
        content="Przekaż 1% dla Amelii na leczenie białaczki"
      />
      <meta
        property="og:image"
        content="https://res-console.cloudinary.com/milus/thumbnails/transform/v1/image/upload//v1610393146/QW1lbGlh/drilldown"
      />
      <meta
        property="og:image:secure_url"
        content="https://res-console.cloudinary.com/milus/thumbnails/transform/v1/image/upload//v1610393146/QW1lbGlh/drilldown"
      />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:description"
        content="Przekaż 1% dla Amelii na leczenie białaczki"
      />
      <meta
        name="twitter:title"
        content="Przekaż 1% dla Amelii na leczenie białaczki"
      />
      <meta
        name="twitter:image"
        content="https://res-console.cloudinary.com/milus/thumbnails/transform/v1/image/upload//v1610393146/QW1lbGlh/drilldown"
      />
    </Head>
  )
}
