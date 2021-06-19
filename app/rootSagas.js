import { all, fork } from 'redux-saga/effects';
import authSagas from './auth/sagas';

export default function* rootSagas() {
  yield all([fork(authSagas)]);
}
