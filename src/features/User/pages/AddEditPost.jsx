import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { usePost } from '../../../hooks/post'
import { usePosts } from '../../../hooks/posts'
import { useUser } from '../../../hooks/user'
import { AddEditForm } from '../components/AddEditForm'

function AddEditPost(props) {
  const { postId } = useParams()

  const { post } = usePost(postId)
  const { user } = useUser('2a416250-038f-4123-bf5d-057ba0aac479')
  const { addMutation, updateMutation } = usePosts()

  async function handleFormSubmit(formValues) {
    try {
      if (post) {
        await updateMutation.mutateAsync({ id: post.id, ...formValues })
        toast.success('Edit post success')
        return
      }

      await addMutation.mutateAsync(formValues)
      toast.success('Create post success')
    } catch (error) {
      console.log(error)
      toast.error(post ? 'Edit post failed' : 'Add post failed')
    }
  }

  return (
    <Box sx={{ my: 8 }}>
      <Container>
        <Typography variant="h3" textAlign="center" fontWeight={500} sx={{ mb: 6 }}>
          {post ? 'Edit post' : 'Add post'}
        </Typography>

        <Box>
          <AddEditForm post={post} user={user} onFormSubmit={handleFormSubmit} />
        </Box>
      </Container>
    </Box>
  )
}

export default AddEditPost
