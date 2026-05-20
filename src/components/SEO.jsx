import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url, children }) => {
  // Updated to your actual production domain
  const baseUrl = 'https://amconzinfra.com';
  const fullUrl = `${baseUrl}${url}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={fullUrl} />
      {children} {/* 👈 extra tags yahan inject honge */}
    </Helmet>
  );
};

export default SEO;