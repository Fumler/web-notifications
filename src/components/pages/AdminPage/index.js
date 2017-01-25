import React from 'react'

import { PageTemplate, Header } from 'components'

const AdminPage = () => {
  return (
    <PageTemplate header={<Header />}>
      <h1>Hello, admin!</h1>
    </PageTemplate>
  )
}

export default AdminPage