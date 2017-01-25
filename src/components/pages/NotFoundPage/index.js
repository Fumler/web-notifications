import React from 'react'

import { PageTemplate, Header } from 'components'
import { Notification } from 'containers'

const NotFoundPage = () => {
  return (
    <PageTemplate header={<Header />} notification={<Notification />}>
      <h1>404</h1>
    </PageTemplate>
  )
}

export default NotFoundPage