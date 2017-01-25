import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createSocketIoMiddleware from 'redux-socket.io'
import io from 'socket.io-client'

import sagas from './sagas'
import reducer from './reducers'

const configureStore = (initialState, history) => {
  const hasWindow = typeof window !== 'undefined'
  const sagaMiddleware = createSagaMiddleware()
  let socket = io('http://localhost:8080')
  let socketIoMiddleware = createSocketIoMiddleware(socket, "server/")

  const finalCreateStore = compose(
    applyMiddleware(sagaMiddleware, socketIoMiddleware, routerMiddleware(history)),
    hasWindow && window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )(createStore)


  const store = finalCreateStore(reducer, initialState)
  let sagaTask = sagaMiddleware.run(sagas)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
    module.hot.accept('./sagas', () => {
      const nextSagas = require('./sagas').default
      sagaTask.cancel()
      sagaTask.done.then(() => {
        sagaTask = sagaMiddleware.run(nextSagas)
      })
    })
  }

  return store
}

export default configureStore