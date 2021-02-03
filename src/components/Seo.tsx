import * as React from 'react'
import { FC } from 'react'
import Head from 'next/head'
import { siteDesc, siteTitle } from '../constants'

export const Seo: FC = () => {
  return (
    <Head>
      <title>{siteTitle}</title>
      <link rel="canonical" href="https://ameliamorawska.pl" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" property="description" content={siteDesc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        property="keywords"
        content="1%, podatek, białaczka, Wrocław, Amelia, przekaż, PIT, Morawska, nowotwór, rak, limfoblastyczna"
      />
      <meta
        name="robots"
        property="robots"
        content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta property="og:locale" name="og:locale" content="en_US" />
      <meta property="og:type" name="og:type" content="website" />
      <meta property="og:title" name="og:title" content={siteTitle} />
      <meta
        property="og:description"
        name="og:description"
        content={siteDesc}
      />
      <meta
        property="og:url"
        name="og:url"
        content="https://ameliamorawska.pl"
      />
      <meta property="og:site_name" name="og:site_name" content={siteTitle} />
      <meta
        property="og:image"
        name="og:image"
        content="https://res-console.cloudinary.com/milus/thumbnails/transform/v1/image/upload//v1610393146/QW1lbGlh/drilldown"
      />
      <meta
        property="og:image:secure_url"
        name="og:image:secure_url"
        content="https://res-console.cloudinary.com/milus/thumbnails/transform/v1/image/upload//v1610393146/QW1lbGlh/drilldown"
      />
      <meta name="og:image:width" property="og:image:width" content="1280" />
      <meta name="og:image:height" property="og:image:height" content="630" />
      <meta
        name="twitter:card"
        property="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:description"
        property="twitter:description"
        content="Przekaż 1% dla Amelii na leczenie białaczki"
      />
      <meta
        name="twitter:title"
        property="twitter:title"
        content="Przekaż 1% dla Amelii na leczenie białaczki"
      />
      <meta
        name="twitter:image:src"
        property="twitter:image:src"
        content="https://res-console.cloudinary.com/milus/thumbnails/transform/v1/image/upload//v1610393146/QW1lbGlh/drilldown"
      />
    </Head>
  )
}
