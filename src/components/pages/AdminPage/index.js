import React from 'react'

import { PageTemplate, Header } from 'components'
import { PostForm, NotificationForm, Notification } from 'containers'

const AdminPage = () => {
  return (
    <PageTemplate header={<Header />} notification={<Notification />}>
      <PostForm />
      <NotificationForm />
    </PageTemplate>
  )
}

export default AdminPage