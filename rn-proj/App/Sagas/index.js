import { all, fork } from 'redux-saga/effects'
import UserSaga from './UserSagas'
import API from '@Services/Api'

/* ------------- API ------------- */

const api = API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    fork(UserSaga, api)
  ])
}
