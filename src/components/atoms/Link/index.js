import React from 'react'
import styled, { css } from 'styled-components'
import { Link as RouterLink } from 'react-router'

const styles = css`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const StyledLink = styled(RouterLink)`${styles}`
const Anchor = styled.a`${styles}`

const Link = ({ ...props, to }) => {
  if (to) {
    return <StyledLink {...props} />
  }
  return <Anchor {...props} />
}

export default Link

