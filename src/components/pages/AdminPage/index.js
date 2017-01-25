import React from 'react'

import { PageTemplate, Header } from 'components'
import { PostForm, Notification } from 'containers'

const AdminPage = () => {
  return (
    <PageTemplate header={<Header />} notification={<Notification />}>
      <PostForm />
    </PageTemplate>
  )
}

export default AdminPage