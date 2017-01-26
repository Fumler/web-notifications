import React from 'react'
import styled from 'styled-components'

import { Post } from 'components'

const Wrapper = styled.div`
`

const PostList = ({ list, ...props }) => {
  return (
    <Wrapper {...props}>
      {list.map(post => <Post key={post.id} {...post} />)}
    </Wrapper>
  )
}

export default PostList