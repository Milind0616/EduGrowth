import { Helmet } from 'react-helmet-async'

export default function Seo({ title, description }) {
  return (
    <Helmet>
      <title>{title} | Edu Growth Partners</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}
