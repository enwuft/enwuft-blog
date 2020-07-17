/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import styled from '@emotion/styled';
import { Link, A } from './header-footer-anchor';

const Header = styled.header(({ theme }) => ({
  padding: `0 ${theme.spacing}`,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: theme.headerHeight,
  lineHeight: theme.headerHeight,
  color: theme.textColor,
  [theme.smallMedia]: {
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'space-between',
    height: '50px',
    lineHeight: '20px',
  },
  [theme.largeMedia]: {
    ...theme.centerPadding,
  },
}));

const H1 = styled.h1(({ theme }) => ({
  fontSize: '1.5rem',
  margin: 0,
  [theme.smallMedia]: {
    fontSize: '1rem',
  },
}));

const Small = styled.small({
  fontSize: '100%',
  opacity: 0.55,
});

const Nav = styled.nav(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  textTransform: 'uppercase',
  a: {
    marginLeft: theme.spacing,
  },
}));

const SiteHeader = () => (
  <Header>
    <H1>
      <Link to="/">Vite Blog</Link>{' '}
    </H1>
    <Small>หวังว่าผู้อ่านจะได้สิ่งเรียนรู้สิ่งใหม่</Small>
    <Nav>
      <Link to="/">Blog</Link>
      <Link to="/about">About</Link>
    </Nav>
  </Header>
);

export default SiteHeader;
