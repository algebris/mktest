import React from 'react';
import { Helmet } from 'react-helmet';
import {
  AppBar,
  CssBaseline,
  Container,
  Box,
} from '@material-ui/core';
import { ToolBar } from '../components/ToolBar/ToolBar';

import { useIntl } from 'react-intl';

export function RootLayout({ children }) {
  const intl = useIntl();

  return [
    <Helmet key="head">
      <title>{intl.formatMessage({ id: 'root.title' })}</title>
    </Helmet>,
    <CssBaseline key="cssBase" />,
    <AppBar position="static" key="appBar">
      <ToolBar />
    </AppBar>,
    <Container key="container">
      <Box display="flex" flexDirection="column" spacing={1}>
        { children }
      </Box>
    </Container>
  ];
}
