import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import GlobalTheme from './global-style';

import { rhythm, scale } from '../utils/typography';

const LayoutContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`;

const HeaderContainer = styled.header`
  h1 {
    ${{ ...scale(1.5) }}
    color: black;
    marginbottom: rhythm(1.5);
    margintop: 0;
  }
  h3 {
    fontfamily: Maven Pro, sans-serif;
    color: black;
    margintop: 0;
  }
`;

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3>
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    );
  }
  return (
    <LayoutContainer>
      <GlobalTheme />
      <HeaderContainer>{header}</HeaderContainer>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </LayoutContainer>
  );
};

export default Layout;
