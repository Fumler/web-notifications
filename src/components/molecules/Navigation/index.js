import React from 'react'
import styled from 'styled-components'

import { Link } from 'components'
import { fonts, colors } from 'components/globals'

const Nav = styled.nav`
  font-family: ${fonts.primary};
  display: flex;
  list-style: none;
  > :not(:first-child) {
    margin-left: 1rem;
  }
  a {
    font-weight: 400;
    font-size: 1.25rem;
    color: #fff;
    &.active {
      color: #ccc;
    }
  }
`

const Navigation = (props) => {
  return (
    <Nav {...props}>
      <li><Link to="/" onlyActiveOnIndex activeClassName="active">News</Link></li>
      <li><Link to="/admin" activeClassName="active">Admin</Link></li>
      <li><Link to="/about" activeClassName="active">About</Link></li>
    </Nav>
  )
}

export default Navigation