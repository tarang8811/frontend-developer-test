import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  usersRequest: [],
  usersRequestSuccess: ['data'],
  usersRequestFailure: ['error'],
})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  data: [],
  error: null,
  fetching: false,
})

/* ------------- Reducers ------------- */

export const usersRequest = (state) => {
  return state.merge({ fetching: true, error: null })
}

export const usersRequestSuccess = (state, { data }) => {
  return state.merge({ data, fetching: false })
}

export const usersRequestFailure = (state, { error }) => {
  return state.merge({ error, fetching: false })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USERS_REQUEST]: usersRequest,
  [Types.USERS_REQUEST_SUCCESS]: usersRequestSuccess,
  [Types.USERS_REQUEST_FAILURE]: usersRequestFailure,
})
