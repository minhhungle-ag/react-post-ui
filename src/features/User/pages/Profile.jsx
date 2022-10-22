import {
  Box,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Pagination,
  Stack,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Loading } from '../../../components/Common/Loading'
import { usePosts } from '../../../hooks/posts'
import { useUser } from '../../../hooks/user'
import { AddEditForm } from '../components/AddEditForm'
import { Info } from '../components/info'
import MyPostList from '../components/MyPostList'

function Profile(props) {
  const [showAddEditModel, setShowAddEditModel] = useState(false)
  const [selectedPost, setSelectedPost] = useState(null)
  const [params, setParams] = useState({
    page: 1,
    limit: 2,
  })

  const navigate = useNavigate()
  const { user, isLoading } = useUser('2a416250-038f-4123-bf5d-057ba0aac479')
  const { postList, pagination, removeMutation, addMutation, updateMutation } = usePosts({
    ...params,
    author: user?.fullname,
  })

  function handleClose() {
    setSelectedPost(null)
    setShowAddEditModel(false)
  }

  async function handleRemovePost(post) {
    const message = `Do You Really Want To Remove "${post.title}"?`
    if (window.confirm(message)) {
      await removeMutation.mutateAsync(post.id)
    }
  }

  async function handleFormSubmit(formValues) {
    if (selectedPost) {
      try {
        const data = {
          id: selectedPost.id,
          ...formValues,
        }
        await updateMutation.mutateAsync(data)
        toast.success('Edit post success')
        handleClose()
      } catch (error) {
        console.log(error)
      }

      return
    }

    await addMutation.mutateAsync(formValues)
    toast.success('Add new post success')
    handleClose()
  }

  return isLoading ? (
    <Loading />
  ) : (
    <Box>
      <Box height={300}>
        <Box
          width="100%"
          height="100%"
          component="img"
          alt="banner"
          src="https://picsum.photos/1368/300?blur=2"
          sx={{ objectFit: 'cover' }}
        />
      </Box>

      <Box sx={{ my: { xs: 4, md: 8 } }}>
        <Container>
          <Typography
            variant="h3"
            textAlign="center"
            fontWeight={500}
            sx={{ mb: { xs: 2, md: 6 } }}
          >
            My profile
          </Typography>

          <Info user={user} onBtnClick={() => setShowAddEditModel(true)} />

          {Array.isArray(postList) && postList.length > 0 && (
            <Box>
              <Typography
                variant="h3"
                textAlign="center"
                fontWeight={500}
                sx={{ my: { xs: 2, md: 6 } }}
              >
                My latest posts
              </Typography>

              <MyPostList
                postList={postList || []}
                onCardClick={(postId) => navigate(`/blog/${postId}`)}
                onEdit={(post) => {
                  setSelectedPost(post)
                  setShowAddEditModel(true)
                }}
                onRemove={handleRemovePost}
              />

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{ my: { xs: 2, md: 6 } }}
              >
                <Pagination
                  count={pagination?.total_page}
                  onChange={(event, page) => setParams({ ...params, page: page })}
                  variant="outlined"
                  shape="rounded"
                  page={params.page}
                />
              </Stack>
            </Box>
          )}

          <Dialog open={showAddEditModel} onClose={handleClose} fullWidth maxWidth="md">
            <DialogTitle>{selectedPost ? 'EDIT POSt' : 'ADD NEW POST'}</DialogTitle>

            <Divider />

            <DialogContent>
              <AddEditForm
                post={selectedPost}
                user={user}
                onFormSubmit={handleFormSubmit}
                onCancelClick={handleClose}
              />
            </DialogContent>
          </Dialog>
        </Container>
      </Box>
    </Box>
  )
}

export default Profile
