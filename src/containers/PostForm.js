import React from 'react'
import { reduxForm } from 'redux-form'
import { postCreate } from 'store/actions'

import { PostForm } from 'components'

const PostFormContainer = props => <PostForm {...props} />

const onSubmit = (data, dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(postCreate.request(data, resolve, reject))
  })
}

export default reduxForm({
  form: 'PostForm',
  destroyOnUmount: false,
  onSubmit
})(PostFormContainer)