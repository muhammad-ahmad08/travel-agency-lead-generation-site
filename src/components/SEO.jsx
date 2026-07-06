import { Helmet } from 'react-helmet-async'

export default function SEO() {
  const siteUrl = 'https://travel-agency-lead-generation-site.vercel.app'
  const title = 'Wanderlust — Your Dream Travel Agency'
  const description =
    'Wanderlust Travel Agency offers handcrafted travel experiences to the world\'s most breathtaking destinations. Book your dream trip today and get up to 20% off selected packages.'
  const image = `${siteUrl}/images/screenshot-desktop.png`

  const travelAgencySchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Wanderlust Travel Agency',
    url: siteUrl,
    logo: `${siteUrl}/images/screenshot-desktop.png`,
    description: description,
    telephone: '+923245693908',
    email: 'info@wanderlust.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Travel Street',
      addressLocality: 'Lahore',
      addressCountry: 'PK',
    },
    sameAs: [
      'https://wa.me/923245693908',
    ],
    openingHours: 'Mo-Su 09:00-18:00',
    currenciesAccepted: 'USD, PKR',
    paymentAccepted: 'Cash, Credit Card',
    priceRange: '$$',
  }

  const touristDestinationsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Featured Travel Destinations',
    description: 'Handpicked travel destinations offered by Wanderlust Travel Agency',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'TouristDestination',
          name: 'Bali, Indonesia',
          description: 'Experience the magic of tropical temples, rice terraces, and pristine beaches.',
          url: siteUrl,
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'TouristDestination',
          name: 'Santorini, Greece',
          description: 'Discover iconic white-washed buildings, volcanic beaches and stunning sunsets.',
          url: siteUrl,
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'TouristDestination',
          name: 'Kyoto, Japan',
          description: 'Immerse yourself in ancient temples, cherry blossoms and traditional culture.',
          url: siteUrl,
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'TouristDestination',
          name: 'Machu Picchu, Peru',
          description: 'Trek through the clouds to the legendary lost city of the Inca Empire.',
          url: siteUrl,
        },
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'TouristDestination',
          name: 'Amalfi Coast, Italy',
          description: 'Wind along dramatic clifftop roads overlooking the sparkling Mediterranean.',
          url: siteUrl,
        },
      },
      {
        '@type': 'ListItem',
        position: 6,
        item: {
          '@type': 'TouristDestination',
          name: 'Safari, Kenya',
          description: 'Witness the great migration and encounter the Big Five in their natural habitat.',
          url: siteUrl,
        },
      },
    ],
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="google-site-verification" content="pJTDjP6j0AqU4xMQ9B86j3wwkpGmyyBNjPa8Ku-B4q8" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="travel agency, holiday packages, tour packages, Bali tours, Santorini travel, Kenya safari, luxury travel, affordable travel, Wanderlust" />
      <meta name="author" content="Muhammad Ahmad" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Wanderlust Travel Agency" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Theme Color */}
      <meta name="theme-color" content="#0F2B5B" />

      {/* Schema Markup — TravelAgency */}
      <script type="application/ld+json">
        {JSON.stringify(travelAgencySchema)}
      </script>

      {/* Schema Markup — TouristDestinations */}
      <script type="application/ld+json">
        {JSON.stringify(touristDestinationsSchema)}
      </script>
    </Helmet>
  )
}