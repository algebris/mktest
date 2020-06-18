import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { selectTheme } from '../../store/root.selectors';

export default function AppThemeProvider({ themes, children }) {
  const currentTheme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={themes[currentTheme] || themes[Object.keys(themes)[0]]}>
      {children}
    </ThemeProvider>
  );
}
