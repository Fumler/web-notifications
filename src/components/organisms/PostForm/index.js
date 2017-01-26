import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { Heading, Button, Input } from 'components'

const Form = styled.form`
  width: 100%;
  padding: 1rem;
`

const Label = styled.label`
  line-height: 1.5;
`

const PostForm = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Heading level={2}>Create a post</Heading>
      <Label htmlFor="title">Title</Label>
      <Field name="title" type="input" component={Input}  />
      <Label htmlFor="content">Content</Label>
      <Field name="content" type="textarea" component={Input} />
      <Label htmlFor="imageUrl">Image URL</Label>
      <Field name="imageUrl" type="input" component={Input} />
      <Button type="submit" disabled={submitting} primary>Create</Button>
    </Form>
  )
}

export default PostForm