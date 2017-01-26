import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'
import { fonts } from './globals'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lato|Slabo+27px');

  body {
    margin: 0;
    background: #eee;
    box-sizing: border-box;
    font-family: ${fonts.primary};
  }
`

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>{ children }</div>
    )
  }
}

export default App