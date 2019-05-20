import {call, put, takeLatest} from 'redux-saga/effects'
import api from '../api'
import * as types from '../actions/Login/ActionTypes'
import {loginRequestSuccess} from "../actions/Login";

const url = 'http://127.0.0.1:8000/auth/login/';

export function* loginRequest(user) {
  const data = {
    username: user.username,
    password: user.password,
  };
  try {
    const response = yield call(api.post, url, data);
    if (response) {
      yield put(loginRequestSuccess(response))
    }
  } catch (e) {
    console.log('Login Request Error: ', e.message)
  }
}

export default function* LoginSaga() {
  yield takeLatest(types.LOGIN_REQUEST, loginRequest);
}


