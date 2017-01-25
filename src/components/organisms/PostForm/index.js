import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { Heading, Button } from 'components'

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
`

const PostForm = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Heading level={2}>Create a post</Heading>
      <Field name="title" label="Title" component="input" />
      <Field name="content" label="Content" type="textarea" component="input" />
      <Button type="submit" disabled={submitting} primary>Create</Button>
    </Form>
  )
}

export default PostForm