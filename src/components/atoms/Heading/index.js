import React from 'react'
import styled, { css } from 'styled-components'

import { fonts, colors } from 'components/globals'

export const fontSize = ({ level }) => `${0.75 + (1 * (1 / level))}rem`

const styles = css`
  font-weight: 500;
  font-size: ${fontSize};
  margin: 0;
  margin-top: 0.8em;
  margin-bottom: 0.5em;
`

const Heading = styled(({ level = 1, children, ...props }) =>
  React.createElement(`h${level}`, props, children)
)`${styles}`

export default Heading

