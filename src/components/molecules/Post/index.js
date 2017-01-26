import React from 'react'
import styled from 'styled-components'

import { Heading, Paragraph, Link } from 'components'

const Article = styled.article``

const Post = ({ id, title, content, ...props }) => {
  return (
    <Article {...props}>
      <Link to={'/post/' + id}>
        <Heading level={2}>{title}</Heading>
      </Link>
      <Paragraph>{content}</Paragraph>
    </Article>
  )
}

export default Post