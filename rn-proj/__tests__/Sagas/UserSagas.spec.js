import { expectSaga } from 'redux-saga-test-plan'
import API from '@Services/Api'
import UserSaga from '@Sagas/UserSagas'
import UserRedux from '@Redux/UserRedux'
import { call } from 'redux-saga/effects'
const api = API.create()

const users = [
  { id: 10, info: { name: 'abcd' } },
  { id: 11, info: { name: 'abcssd' } }
]

describe('User Sagas', () => {
  it('fetches users', () => {
    return expectSaga(UserSaga, api)
      .provide([[call(api.getUsers), getSuccessObject(users)]])
      .put(UserRedux.usersRequestSuccess(users))
      .dispatch(UserRedux.usersRequest())
      .silentRun()
  })
})

export const getSuccessObject = data => {
  return {
    ok: true,
    data: { data }
  }
}
