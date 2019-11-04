import { all, call, takeLatest, put, delay } from 'redux-saga/effects'
import UserActions, { UserTypes } from '@Redux/UserRedux'
import UIActions from '@Redux/UIRedux'
import I18n from '@I18n'

export function* getUsers(api) {
  yield put(UIActions.onToggleLoader(true))
  const resp = yield call(api.getUsers)
  if (resp.ok) {
    console.log(resp.data.data.map(d => d.associated))
    yield put(UserActions.usersRequestSuccess(resp.data.data))
    // show animation for a bit longer
    yield delay(300)
    yield put(UIActions.onToggleLoader(false))
  } else {
    yield put(UIActions.onToggleLoader(false))
    yield put(UserActions.usersRequestFailure(I18n.t('networkError')))
  }
}

export default function* UserSagas(api) {
  yield all([takeLatest(UserTypes.USERS_REQUEST, getUsers, api)])
}
