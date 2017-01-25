import React, { Component } from 'react'
import axios from 'axios'
//import { PostList } from 'components'

class PostListContainer extends Component {
  componentDidMount() {
    axios.get('/api/articles')
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return <div></div>
  }
}

export default PostListContainer