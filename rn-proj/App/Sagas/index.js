import { all, fork } from 'redux-saga/effects'
// import userSaga from './UserSagas'
import API from '@Services/Api'

/* ------------- API ------------- */

const api = API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    //fork(userSaga, api)
  ])
}
