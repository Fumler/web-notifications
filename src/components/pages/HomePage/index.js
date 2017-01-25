import React from 'react'

import { PageTemplate, Header } from 'components'
import { PostList } from 'containers'

const HomePage = () => {
  return (
    <PageTemplate header={<Header />}>
      <h1>Hello, home!</h1>
      <PostList />
    </PageTemplate>
  )
}

export default HomePage