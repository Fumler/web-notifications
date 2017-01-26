import React from 'react'
import styled from 'styled-components'
import { fonts } from 'components/globals'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px 0;
  min-height: 100vh;
  box-sizing: border-box;
`

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background-color: #222;
`

const Content = styled.section`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 920px;

`

const PageTemplate = ({ header, notification, children, ...props }) => {
  return(
    <Wrapper {...props}>
      { notification && <div>{notification}</div>}
      <Header>{header}</Header>
      <Content>{children}</Content>
    </Wrapper>
  )
}

export default PageTemplate