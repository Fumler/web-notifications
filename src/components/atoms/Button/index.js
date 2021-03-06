import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: ${props => props.primary ? '#222' : 'white'};
  color: ${props => props.primary ? 'white' : '#222'};

  font-size: 1em;
  margin: 1em 0;
  padding: 0.25em 1em;
  border: 2px solid #222;
  border-radius: 3px;
  cursor: pointer;
  height: 40px;

  &:hover {
    background: #777;
  }

  &:active {
    background: #777;
  }

  &:disabled {
    cursor: not-allowed;
    background: #777;
  }
`

const Button = ({ ...props }) => (<StyledButton {...props} />)

export default Button;