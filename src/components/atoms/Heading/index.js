import React from 'react'
import styled, { css } from 'styled-components'

import { fonts, colors } from 'components/globals'

export const fontSize = ({ level }) => `${0.75 + (1.6 * (1 / level))}rem`

const styles = css`
  font-weight: 500;
  font-size: ${fontSize};
  padding: 12px 24px;

`

const Heading = styled(({ level = 1, children, ...props }) =>
  React.createElement(`h${level}`, props, children)
)`${styles}`

export default Heading

