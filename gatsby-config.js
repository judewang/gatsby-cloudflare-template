/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { config } = require('./package.json');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const configs = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL,
    title: 'Gatsby startup for Cloudflare',
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        key: 'gatsby',
        fileName: './types/gatsby-graphql-types.d.ts',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          placeholder: 'blurred',
          quality: 80,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        localeJsonSourceName: 'locale',
        languages: config.languages,
        defaultLanguage: config.defaultLanguage,
        generateDefaultLanguagePage: true,
        redirect: true,
        siteUrl: process.env.SITE_URL,
        i18nextOptions: {
          defaultNS: 'common',
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
        },
        pages: [],
      },
    },
    'gatsby-plugin-layout',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'locale',
        path: './src/locales',
      },
      __key: 'locale',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: './src/contents/',
      },
      __key: 'contents',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@/images': path.join(__dirname, 'src/images'),
        '@/medias': path.join(__dirname, 'src/medias'),
        '@/components': path.join(__dirname, 'src/components'),
        '@/hooks': path.join(__dirname, 'src/hooks'),
        '@/libs': path.join(__dirname, 'src/libs'),
        '@/models': path.join(__dirname, 'src/models'),
        '@/theme': path.join(__dirname, 'src/gatsby-plugin-theme-ui'),
      },
    },
  ],
};

if (!!process.env.GA_TRACKING_ID)
  config.plugins.push({
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: process.env.GA_TRACKING_ID,
    },
  });

module.exports = configs;
