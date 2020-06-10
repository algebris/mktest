import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { RootLayout } from 'apps/root';
import { AppTheme } from 'app.theme';
import { AppRouter } from 'app.router';
import { SnackbarProvider } from 'notistack';
import { rootReducer } from 'app.reducers';
import { translations } from './translations';

const currentLang = 'en';
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={AppTheme}>
      <IntlProvider locale={currentLang} messages={translations[currentLang]}>
        <BrowserRouter>
          <SnackbarProvider>
            <RootLayout>
              <AppRouter />
            </RootLayout>
          </SnackbarProvider>
        </BrowserRouter>
      </IntlProvider>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
