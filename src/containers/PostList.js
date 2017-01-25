import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getList } from 'store/selectors'
import { postList } from 'store/actions' 
//import { PostList } from 'components'

class PostListContainer extends Component {
  componentDidMount() {
    this.props.request()
  }

  render() {
    const { list } = this.props
    return <div>{ list }</div>
  }
}

const mapStateToProps = (state) => ({
  list: getList(state)
})

const mapDispatchToProps = (dispatch) => ({
  request: () => dispatch(postList.request())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer)