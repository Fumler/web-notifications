import React from 'react'
import styled from 'styled-components'

import { Heading, Paragraph } from 'components'

const Article = styled.article``

const Post = ({ title, content, ...props }) => {
  return (
    <Article {...props}>
      <Heading level={2}>{title}</Heading>
      <Paragraph>{content}</Paragraph>
    </Article>
  )
}

export default Post