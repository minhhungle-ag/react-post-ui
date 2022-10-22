import UploadIcon from '@mui/icons-material/Upload'
import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useController } from 'react-hook-form'
import { useUpload } from '../../hooks/upload'
export function PhotoField({ name, control, label, imageUrl, width = '100%', height = 'auto' }) {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  })

  const [preview, setPreview] = useState('')

  const { addMutation } = useUpload()

  const handleFileChange = async (e) => {
    e.preventDefault()

    const file = e.target?.files?.[0]

    if (!file) return

    const formData = new FormData()
    formData.append('imageUrl', file)
    try {
      await addMutation.mutateAsync(formData).then((response) => {
        if (response) {
          const { imageUrl } = response

          setPreview(imageUrl)
          onChange(imageUrl)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  const previewUrl = value || preview
  const key = `${name}-field`

  return (
    <Stack spacing={2}>
      <Box component="label" htmlFor={key} sx={{ cursor: 'pointer' }}>
        <Button variant="contained" component="div" startIcon={<UploadIcon />}>
          Upload Image
        </Button>

        <Box
          hidden
          component="input"
          accept="image/*"
          id={key}
          type="file"
          onChange={handleFileChange}
        />
      </Box>

      <Box
        sx={{ border: '2px solid black', borderRadius: 1, overflow: 'hidden' }}
        width={width}
        height={height}
      >
        {previewUrl ? (
          <Box
            component="img"
            alt=""
            src={previewUrl}
            sx={{ width: '100%', height: '100%', verticalAlign: 'middle' }}
          />
        ) : (
          <Stack justifyContent="center" alignItems="center" width={'100%'} height={'100%'}>
            <Typography variant="h3" color="grey" fontWeight={200}>
              Thumbnail
            </Typography>
          </Stack>
        )}
      </Box>
    </Stack>
  )
}
