import React from 'react'
import styled from 'styled-components'

import { Heading, Paragraph, Link } from 'components'

const Article = styled.article`
  border-radius: 2px 2px 0 0;
  display: block;
  transform: translateZ(0);
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, .12);
  outline: none;
  overflow: hidden;
  transition: .2s;
  margin-top: 1px;

  &:first-child:hover {
    margin-top: 0;
  }

  &:hover {
    margin: 12px -12px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .12);
  }

  > a {
    color: #333;
  }
`

const Image = styled.img`
  width: 100%;
`

const Post = ({ id, title, content, imageUrl, ...props }) => {
  return (
    <Article {...props}>
      <Link to={'/post/' + id}>
        {imageUrl && <Image src={imageUrl} alt="Related image" />}
        <Heading level={2}>{title}</Heading>
      </Link>
      <Paragraph>{content}</Paragraph>
    </Article>
  )
}

export default Post