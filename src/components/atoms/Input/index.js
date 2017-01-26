import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  display: block;
  margin: 0;
  width: 100%;
  height: 25px;
`

const Input = ({ input, ...props }) => (<StyledInput {...input} />)

export default Input