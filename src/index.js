import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from 'store/configure'

import routes from 'routes'

const store = configureStore({}, browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

const renderApp = () => (
  <AppContainer>
    <Provider store={store}>
      <Router history={history} routes={routes} />
   </Provider>
  </AppContainer>
)

render(renderApp(), document.getElementById('app'))

if (module.hot) {
  module.hot.accept('routes', () => {
    require('routes')
    render(renderApp(), document.getElementById('app'))
  })
}