import { Box, Button } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { InputField } from '../../../components/FormField/InputField'
import { PhotoField } from '../../../components/FormField/PhotoField'

export function AddEditForm({ user, post, onFormSubmit }) {
  const { control, handleSubmit } = useForm({
    defaultValues: post || {
      author: user.fullname,
      avatar: user.avatar,
      title: '',
      imageUrl: '',
      short_description: '',
      description: '',
    },
  })

  function handleFormSubmit(formValues) {
    onFormSubmit?.(formValues)
  }

  return (
    <Box component="form" noValidate onSubmit={handleSubmit(handleFormSubmit)}>
      <InputField control={control} name="title" label="Titlle" />
      <InputField control={control} name="author" label="Author" />

      <InputField
        control={control}
        name="short_description"
        label="Short_description"
        multiline
        row={100}
      />

      <InputField control={control} name="description" label="Description" multiline row={1000} />

      <Box sx={{ mb: 2 }} />

      <PhotoField control={control} name="imageUrl" width={350} height={200} />

      <Button variant="contained" color="primary" type="submit" sx={{ mt: 2, mr: 1 }}>
        Save
      </Button>

      <Button variant="outlined" color="primary" type="submit" sx={{ mt: 2 }}>
        Cancel
      </Button>
    </Box>
  )
}
