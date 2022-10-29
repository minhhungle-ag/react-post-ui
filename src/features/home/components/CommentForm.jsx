import { Box, Button } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { InputField } from '../../../components/FormField/InputField'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
const schema = yup.object({
  name: yup.string().required(),
  comment: yup.string().required(),
})

function CommentForm({ username, onFormSubmit }) {
  const { control, handleSubmit, resetField } = useForm({
    defaultValues: {
      name: username || '',
      comment: '',
    },
    resolver: yupResolver(schema),
    mode: 'all',
  })

  function handleFormSubmit(formValues) {
    onFormSubmit(formValues)
    resetField('comment')
  }

  return (
    <Box component="form" onSubmit={handleSubmit(handleFormSubmit)} noValidate>
      <InputField control={control} name="name" label="Who are you?" />
      <InputField control={control} name="comment" multiline row={3} label="Comment" />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </Box>
  )
}

export default CommentForm
