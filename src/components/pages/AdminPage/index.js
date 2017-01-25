import React from 'react'

import { PageTemplate, Header } from 'components'
import { PostForm } from 'containers'

const AdminPage = () => {
  return (
    <PageTemplate header={<Header />}>
      <PostForm />
    </PageTemplate>
  )
}

export default AdminPage