import React from 'react'
import { reduxForm } from 'redux-form'
import { postCreate, sendMessage } from 'store/actions'
import Notifications from 'react-notification-system-redux'
import { browserHistory } from 'react-router'

import { PostForm } from 'components'

const PostFormContainer = props => <PostForm {...props} />

const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  dispatch(postCreate.request(data, resolve, reject))
  dispatch(sendMessage({
    opts: {
      title: data.title,
      message: data.content,
      position: 'tr',
      autoDismiss: 5,
      action: {
        label: 'Ok',
          callback: () => null
      }
    },
    level: 'info'
  })
  )
})

export default reduxForm({
  form: 'PostForm',
  destroyOnUmount: false,
  onSubmit
})(PostFormContainer)