/* eslint-disable max-len, react/jsx-one-expression-per-line */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import siteShape from '../shapes/site';
// import excelSetupPng from '../images/excel-setup-diagram.png';

// const ghLink = <a href="https://github.com/">my GitHub</a>
// const cdpLink = <a href="http://cursordanceparty.com">Cursor Dance Party</a>
// const esdLink = <a href={excelSetupPng}>full setup diagram</a>

const ResumeHeader = styled.header(({ theme }) => ({
  ...theme.centerPadding,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  '> h5': {
    margin: 0,
  },
}));

const H2 = styled.h2(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing,
}));
// const H3 = styled.h3(({ theme }) => ({
//   ...theme.centerPadding,
//   marginBottom: theme.spacing,
// }));
const H4 = styled.h4(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing,
}));
const P = styled.p(({ theme }) => ({
  ...theme.centerPadding,
}));
const Ul = styled.ul(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing,
  marginLeft: `${theme.spacingPx * 4}px`,
}));

const About = ({
  data: {
    site: { siteMetadata: site },
  },
}) => (
  <Layout>
    <main>
      <Helmet>
        <title>About &middot; {site.title}</title>
      </Helmet>
      <H2>About</H2>
      <blockquote>
        <P>
          &quot;So far as it depends on you, live peaceably with everyone.&quot;
          - The Apostle Paul, to the Romans
        </P>
      </blockquote>
      <H4>Software</H4>
      <Ul>
        <li>
          Database: PostgreSQL, MySQL, SQL Server, SQLite/SQLCipher, MongoDB,
          Redis
        </li>
        <li>Server: nginx, Apache httpd</li>
        <li>Tools: Docker, Git, Jenkins, Travis CI</li>
        <li>Platforms: macOS, Linux / Unix, Microsoft Windows</li>
      </Ul>
      <H4>Experience</H4>
      <ResumeHeader>
        <h5>Signal Messenger &middot; Desktop Developer &middot; Remote</h5>
        <h5>April 2019 - Present</h5>
      </ResumeHeader>
      <ResumeHeader>
        <h5>SHIFT Media &middot; Front End Lead &middot; Boston, MA</h5>
        <h5>September 2017 - April 2019</h5>
      </ResumeHeader>
      <Ul>
        <li>
          Worked with React, Redux, Electron, and modern JavaScript (TypeScript,
          Flow, JSX).
        </li>
        <li>
          Designed and implemented WebSocket communication layer with sagas.
        </li>
        <li>
          Hired as Senior Software Engineer. Promoted to Lead Software Engineer
          in March 2018.
        </li>
      </Ul>
    </main>
  </Layout>
);

About.propTypes = {
  data: PropTypes.shape({
    site: siteShape,
  }).isRequired,
};

export default About;

export const aboutPageQuery = graphql`
  query AboutPageSiteMetadata {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
