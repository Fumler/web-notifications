import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import { HomePage, AdminPage, AboutPage, NotFoundPage } from 'components'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/admin" component={AdminPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
)

export default routes