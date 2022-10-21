import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { toast } from 'react-toastify'
import { Loading } from '../../../components/Common/Loading'
import { usePost } from '../../../hooks/post'
import { usePosts } from '../../../hooks/posts'
import { useUser } from '../../../hooks/user'
import { AddEditForm } from '../components/AddEditForm'

function AddEditPost(props) {
  const { post, isLoading } = usePost('4b9d1a2f-4f41-4493-9e76-c0b1cc3445e2')
  const { user, isLoading: userLoading } = useUser('4b9d1a2f-4f41-4493-9e76-c0b1cc3445e2')
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

  return isLoading || userLoading ? (
    <Loading />
  ) : (
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
