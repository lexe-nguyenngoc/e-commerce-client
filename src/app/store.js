import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import authReducer, {
  ROOT_STATE_NAME as auth,
} from '~/features/Auth/authSlice';

import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    [auth]: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
