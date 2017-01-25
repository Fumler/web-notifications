import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

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
    default:
      return state
  }
}

const reducer = combineReducers({
  routing,
  postReducer
})

export default reducer