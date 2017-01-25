import React from 'react'

import { PageTemplate, Header } from 'components'
import { Notification } from 'containers'

const AboutPage = () => {
  return (
    <PageTemplate header={<Header />} notification={<Notification />}>
      <h1>Hello, about!</h1>
    </PageTemplate>
  )
}

export default AboutPage