import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { InputField } from '../../../components/FormField/InputField'
import { PhotoField } from '../../../components/FormField/PhotoField'

export function AddEditForm({ user, post, onFormSubmit, onCancelClick }) {
  const [value, setValue] = useState('random')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

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
      <FormControl>
        <RadioGroup value={value} onChange={handleChange}>
          <FormControlLabel
            value="random"
            control={<Radio />}
            label="Random image using picsum.photos"
          />
          <FormControlLabel
            value="upload"
            control={<Radio />}
            label="Upload image from your computer"
          />
        </RadioGroup>
      </FormControl>

      {value === 'random' && <InputField control={control} name="imageUrl" label="imageUrl" />}
      {value === 'upload' && (
        <>
          <Box sx={{ mb: 2 }} />
          <PhotoField control={control} name="imageUrl" width={350} height={200} />
        </>
      )}

      <Button variant="contained" color="primary" type="submit" sx={{ mt: 2, mr: 1 }}>
        Save
      </Button>

      <Button
        variant="outlined"
        color="primary"
        type="submit"
        sx={{ mt: 2 }}
        onClick={() => onCancelClick?.()}
      >
        Cancel
      </Button>
    </Box>
  )
}
