import React from 'react'
import { reduxForm } from 'redux-form'
import { sendMessage } from 'store/actions'

import { NotificationForm } from 'components'

const NotificationFormContainer = props => <NotificationForm {...props} />

const onSubmit = (data, dispatch) => {
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
  }))
}

export default reduxForm({
  form: 'NotificationForm',
  destroyOnUmount: false,
  onSubmit
})(NotificationFormContainer)