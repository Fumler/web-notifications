import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from 'store/selectors'
import { postFetch } from 'store/actions' 
import { Post } from 'components'

class PostDetailContainer extends Component {
  componentDidMount() {
    this.props.request()
  }

  render() {
    const { activePost } = this.props
    return <Post {...activePost} />
  }
}

const mapStateToProps = (state) => ({
  activePost: getPost(state)
})

const mapDispatchToProps = (dispatch, id) => ({
  request: () => dispatch(postFetch.request(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer)