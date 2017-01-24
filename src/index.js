import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Router, browserHistory } from 'react-router'
import routes from 'routes'

const renderApp = () => (
  <AppContainer>
    <Router history={browserHistory} routes={routes} />
  </AppContainer>
)

render(renderApp(), document.getElementById('app'))

if (module.hot) {
  module.hot.accept('routes', () => {
    require('routes')
    render(renderApp(), document.getElementById('app'))
  })
}