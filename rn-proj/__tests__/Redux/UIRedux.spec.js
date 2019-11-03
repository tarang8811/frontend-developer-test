import Actions, { reducer, INITIAL_STATE } from '@Redux/UIRedux'

describe('UI Redux', () => {
  it('should show loader when toggle loader is fired with value true', () => {
    const state = reducer(INITIAL_STATE, Actions.onToggleLoader(true))
    expect(state.showLoader).toEqual(true)
  })
})
