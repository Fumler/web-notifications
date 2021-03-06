import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import { reducer as notifications } from 'react-notification-system-redux'

import { initialState } from './selectors'
import * as ActionTypes from './actions'



const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.POST_LIST.SUCCESS:
      return {
        ...state,
        list: action.list

      }
    case ActionTypes.POST_CREATE.SUCCESS:
      return {
        ...state,
        list: [action.data, ...state.list]
      }
    case ActionTypes.POST_FETCH.SUCCESS:
      return {
        ...state,
        activePost: action.post
      }
    default:
      return state
  }
}

const reducer = combineReducers({
  routing,
  form,
  notifications,
  posts: postReducer
})

export default reducer