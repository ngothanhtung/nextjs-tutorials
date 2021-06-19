// sagas
import { put, takeLatest } from 'redux-saga/effects';
import * as ActionTypes from './actions/types';

function* login(action) {
  try {
    const { username, password } = action;
    if (username === 'admin' && password === '147258369') {
      yield put({ type: ActionTypes.AUTH_LOGIN_SUCCESS, loggedInUser: { username, password: action.password } });
    } else {
      alert('Đăng nhập không thành công.\nVui lòng thử lại!');
      yield put({
        type: ActionTypes.AUTH_LOGIN_ERROR,
        error: {
          code: 200,
          error: null,
          message: 'Đăng nhập không thành công.\nVui lòng thử lại!',
        },
      });
    }
  } catch (exception) {
    console.log(exception);
    console.log('SAGA ERROR (authSagas):', exception);
    yield put({
      type: ActionTypes.AUTH_LOGIN_ERROR,
      error: exception.response,
    });
  }
}

function* logout() {
  try {
    yield put({ type: ActionTypes.AUTH_LOG_OUT_SUCCESS });
    localStorage.clear();
  } catch (exception) {
    console.log('SAGA ERROR (authSagas):', exception);
  }
}

export default function* sagas() {
  yield takeLatest(ActionTypes.AUTH_LOGIN, login);
  yield takeLatest(ActionTypes.AUTH_LOG_OUT, logout);
}
