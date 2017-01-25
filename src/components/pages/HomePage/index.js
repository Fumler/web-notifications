import React from 'react'

import { PageTemplate, Header } from 'components'
import { PostList, Notification } from 'containers'


const HomePage = () => {
  return (
    <PageTemplate header={<Header />} notification={<Notification />}>
      <PostList />
    </PageTemplate>
  )
}

export default HomePage