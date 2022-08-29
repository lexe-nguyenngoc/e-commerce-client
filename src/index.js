import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '~/app/store';

import GlobalStyles from '~/components/GlobalStyles';
import App from '~/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles>
        <Provider store={store}>
          <App />
        </Provider>
      </GlobalStyles>
    </BrowserRouter>
  </React.StrictMode>
);
