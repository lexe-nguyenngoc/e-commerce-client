import { all } from 'redux-saga/effects';

import authSaga from '~/features/Auth/authSaga';

function* rootSaga() {
  console.log('[SAGA] - ROOT start 💥💥💥');
  yield all([authSaga()]);
}

export default rootSaga;
