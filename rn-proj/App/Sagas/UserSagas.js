import { all, call, takeLatest } from 'redux-saga/effects'
import UserActions, { UserTypes } from '@Redux/UserRedux'
import I18n from '@I18n'

export function * getUsers (api) {
  const resp = yield call(api.getUsers)
  if (resp.ok) {
    UserActions.usersRequestSuccess(resp.data)
  } else {
    UserActions.usersRequestFailure(I18n.t('networkError'))
  }
}

export default function * UserSagas (api) {
  yield all([
    takeLatest(UserTypes.USERS_REQUEST, getUsers, api),
  ])
}
