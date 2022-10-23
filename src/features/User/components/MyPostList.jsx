import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Box, IconButton, Stack } from '@mui/material'
import React from 'react'
import Card from '../../../components/Common/Card'

function MyPostList({ postList, onCardClick, onEdit, onRemove }) {
  return (
    <Stack direction="row" flexWrap="wrap" sx={{ mx: -1.5 }}>
      {Array.isArray(postList) &&
        postList.map((post, idx) => (
          <Box
            key={idx}
            sx={{ width: { xs: '100%', sm: 1 / 2, md: 1 / 3 } }}
            onClick={() => onCardClick?.(post.id)}
          >
            <Box sx={{ p: 1.5 }}>
              <Card
                title={post.title}
                author={post.author}
                imageUrl={post.imageUrl}
                short_description={post.short_description}
                createdAt={post.createdAt}
                avatar={post.avatar}
                action={
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation()
                        onEdit?.(post)
                      }}
                    >
                      <EditIcon />
                    </IconButton>

                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation()
                        onRemove?.(post)
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                }
              />
            </Box>
          </Box>
        ))}
    </Stack>
  )
}

export default MyPostList
