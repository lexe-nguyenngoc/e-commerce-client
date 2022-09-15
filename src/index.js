import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '~/app/store';

import GlobalStyles from '~/components/GlobalStyles';

const App = lazy(() => import('~/App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles>
        <Suspense fallback={<div>Loading</div>}>
          <Provider store={store}>
            <App />
          </Provider>
        </Suspense>
      </GlobalStyles>
    </BrowserRouter>
  </React.StrictMode>
);
