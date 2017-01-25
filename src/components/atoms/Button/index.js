import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.primary ? '#222' : 'white'};
  color: ${props => props.primary ? 'white' : '#222'};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #222;
  border-radius: 3px;
`;

export default Button;