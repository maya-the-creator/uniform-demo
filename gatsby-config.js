/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 const dotenv = require('dotenv');

 dotenv.config({
   path: `.env`
 });

module.exports = {
  siteMetadata: {
    title: 'uniform-optimize-gatsby-contentful-starter',    
    description: 'UniformConf, a Uniform Optimize demo site'
  },
  /* Your site config here */
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.NODE_ENV === 'production' ? process.env.CONTENTFUL_CDA_ACCESS_TOKEN : process.env.CONTENTFUL_CPA_ACCESS_TOKEN,
        host: process.env.NODE_ENV === 'production' ? 'cdn.contentful.com' : 'preview.contentful.com',
        environment: process.env.CONTENTFUL_ENVIRONMENT ? process.env.CONTENTFUL_ENVIRONMENT : 'master',
        downloadLocal: process.env.NODE_ENV === 'production' ? false : true
      }
    }
  ],
}
