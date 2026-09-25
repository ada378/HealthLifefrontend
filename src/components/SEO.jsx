import { Helmet } from 'react-helmet-async'
import { DOMAIN } from '../data/constants'

export default function SEO({ title, description, path = '/', schema }) {
  const fullTitle = title
    ? `${title} | Health Plus Pharmacy Lucknow`
    : 'Health Plus Pharmacy | Free Home Delivery Medicines in Lucknow'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`${DOMAIN}${path}`} />

      {/* Open Graph */}
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type"        content="website" />
      <meta property="og:url"         content={`${DOMAIN}${path}`} />
      <meta property="og:image"       content={`${DOMAIN}/og-image.jpg`} />
      <meta name="twitter:card"       content="summary_large_image" />
      <meta name="twitter:title"      content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}
