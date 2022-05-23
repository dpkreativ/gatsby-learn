require('dotenv').config;

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'cloudinaryMedia',
        imagePath: 'url',
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
      },
    },
  ],
};
