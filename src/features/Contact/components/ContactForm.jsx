import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { InputField } from '../../../components/FormField/InputField'

const emailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

const schema = yup.object({
  fullName: yup.string().required(),
  email: yup.string().required().matches(emailRegex),
  description: yup.string().required(),
})

export function ContactForm({ onFormSubmit }) {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      description: '',
    },

    resolver: yupResolver(schema),
  })

  function handleFormSubmit(formValues) {
    onFormSubmit?.(formValues)
    reset()
  }

  return (
    <Box component="form" noValidate onSubmit={handleSubmit(handleFormSubmit)}>
      <InputField control={control} name="fullName" label="Full name" />
      <InputField control={control} name="email" label="Email" />
      <InputField control={control} name="description" label="description" multiline row={100} />
      <Button type="submit" variant="contained" fullWidth color="primary" sx={{ mt: 2 }}>
        Send
      </Button>
    </Box>
  )
}
