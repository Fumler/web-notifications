import React from 'react'

import { PageTemplate, Header } from 'components'
import { PostList } from 'containers'

const HomePage = () => {
  return (
    <PageTemplate header={<Header />}>
      <PostList />
    </PageTemplate>
  )
}

export default HomePage