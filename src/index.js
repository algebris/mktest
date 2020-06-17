import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { RootLayout } from 'apps/root';
import * as themes from 'app.theme';
import AppThemeProvider from 'apps/root/components/AppThemeProvider/AppThemeProvider';
import { AppRouter } from 'app.router';
import { SnackbarProvider } from 'notistack';
import { rootReducer } from 'app.reducers';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { translations } from './translations';

const currentLang = 'en';
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <AppThemeProvider themes={themes}>
      <IntlProvider locale={currentLang} messages={translations[currentLang]}>
        <BrowserRouter>
          <SnackbarProvider>
            <RootLayout>
              <AppRouter />
            </RootLayout>
          </SnackbarProvider>
        </BrowserRouter>
      </IntlProvider>
    </AppThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
