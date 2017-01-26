import React from 'react'

import { PageTemplate, Header } from 'components'
import { Notification, PostDetail } from 'containers'


const PostPage = ({ params : { postId }}) => {
  return (
    <PageTemplate header={<Header />} notification={<Notification />}>
      <PostDetail id={postId}/>
    </PageTemplate>
  )
}

export default PostPage