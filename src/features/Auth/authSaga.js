import { call, put, takeLatest } from 'redux-saga/effects';
import { apiRoutes } from '~/constants';
import { https } from '~/services';
import { login, loginFailure, loginSuccess } from './authSlice';

function* handleLogin(action) {
  try {
    const { data } = yield call(https.POST, {
      url: apiRoutes.AUTH,
      data: action.payload,
    });

    yield put(loginSuccess(data));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* authSaga() {
  console.log('[Saga] - auth');
  yield takeLatest(login().type, handleLogin);
}

export default authSaga;
