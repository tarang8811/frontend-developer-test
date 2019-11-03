import Actions, { reducer, INITIAL_STATE } from '@Redux/UserRedux'

const userData = { id: 1, info: { name: 'abcd', age: '24' } }
const error = 'There was an error'

describe('User Redux', () => {
  it('should set the user state when success action is triggered', () => {
    const state = reducer(
      INITIAL_STATE,
      Actions.usersRequestSuccess([userData])
    )
    expect(state.data[0]).toEqual(userData)
  })

  it('should set the user error state when error action is triggered', () => {
    const state = reducer(INITIAL_STATE, Actions.usersRequestFailure(error))
    expect(state.error).toEqual(error)
  })
})
