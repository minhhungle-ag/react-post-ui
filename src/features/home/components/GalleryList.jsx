import { Box, Stack } from '@mui/material'
import React from 'react'

const galleryList = [
  'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Travelling%20Blog/01.jpg',
  'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Travelling%20Blog/02.jpg',
  'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Travelling%20Blog/03.jpg',
  'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Travelling%20Blog/04.jpg',
  'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Travelling%20Blog/05.jpg',
  'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Travelling%20Blog/06.jpg',
  'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Travelling%20Blog/07.jpg',
  'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Travelling%20Blog/08.jpg',
  'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Travelling%20Blog/09.jpg',
  'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Travelling%20Blog/10.jpg',
  'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Travelling%20Blog/11.jpg',
  'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Travelling%20Blog/12.jpg',
]

function GalleryList({onImageClick}) {
  return (
    <Stack direction="row" flexWrap="wrap" sx={{ mx: -1 }}>
      {galleryList.map((item, idx) => (
        <Box key={idx} sx={{ width: { xs: '100%', sm: 1 / 2, md: 1 / 6 }, cursor: 'pointer' }} onClick={() => onImageClick?.(item)} >
          <Box sx={{ p: 1 }}>
            <Box
              boxShadow={3}
              width="100%"
              height="100%"
              component="img"
              alt="thumbnail"
              src={item}
              sx={{
                borderRadius: 1,
                verticalAlign: 'middle',
                objectFit: 'cover',
                '&:hover': {
                  boxShadow: (theme) => theme.shadows[10],
                },
              }}
            />
          </Box>
        </Box>
      ))}
    </Stack>
  )
}

export default GalleryList
