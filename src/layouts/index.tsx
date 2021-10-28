import * as React from 'react';
import { PageProps, useStaticQuery, graphql } from 'gatsby';
import { Flex } from 'theme-ui';
import { Helmet } from 'gatsby-plugin-react-i18next';

const Layout = ({ children }: PageProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Helmet title={data.site.siteMetadata.title}>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
        />
        <script
          defer
          src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"
        />
      </Helmet>
      <Flex
        sx={{
          flexDirection: 'column',
          minHeight: '100%',
        }}
      >
        <Flex as="main" sx={{ flexGrow: 1, flexFlow: 'column' }}>
          {children}
        </Flex>
      </Flex>
    </>
  );
};

export default Layout;
