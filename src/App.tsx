import React from 'react';
import { Provider } from 'react-redux';

import { store } from 'config/rootStore';
import { GlobalStyles } from 'config/styles';
import { AppRoutes } from 'routing/AppRoutes';

export const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <AppRoutes />
  </Provider>
);
