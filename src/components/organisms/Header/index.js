import React from 'react'
import styled from 'styled-components'

import { Navigation } from 'components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`

const StyledNavigation = styled(Navigation)`
  flex: 1;
`

const Header = (props) => {
  return(
    <Wrapper {...props}>
      <StyledNavigation />
    </Wrapper>
  )
}

export default Header