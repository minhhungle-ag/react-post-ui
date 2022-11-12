/* eslint-disable react-hooks/exhaustive-deps */
import { Close } from '@mui/icons-material'
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Pagination,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Loading } from '../../../components/Common/Loading'
import { SwanCard } from '../../../components/Common/SwanCard'
import { SearchBox } from '../../../components/FormField/Searchbox'
import { usePosts } from '../../../hooks/posts'
import { useUser } from '../../../hooks/user'
import { AddEditForm } from '../components/AddEditForm'
import MyPostList from '../components/MyPostList'

export function MyPosts() {
  const [showAddEditModel, setShowAddEditModel] = useState(false)
  const [showDetailModel, setShowDetailModel] = useState(false)
  const [selectedPost, setSelectedPost] = useState(null)
  const [params, setParams] = useState({
    page: 1,
    limit: 6,
  })

  // const token = localStorage.getItem('token')
  const userId = localStorage.getItem('userId')
  const matches = useMediaQuery('(min-width:414px)')

  const { user, isLoading } = useUser(userId)
  const { postList, pagination, removeMutation, addMutation, updateMutation } = usePosts(params)

  function handleCloseAddEditModel() {
    setSelectedPost(null)
    setShowAddEditModel(false)
  }

  function handleSearchChange(value) {
    setParams({
      ...params,
      searchKey: value,
      page: 1,
    })
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
        handleCloseAddEditModel()
      } catch (error) {
        console.log(error)
      }

      return
    }

    await addMutation.mutateAsync(formValues)
    toast.success('Add new post success')
    handleCloseAddEditModel()
  }

  // useEffect(() => {
  //   if (!token) {
  //     navigate('/auth/login')
  //   }
  // }, [token])

  function handleEditPost(post) {
    setSelectedPost(post)
    setShowAddEditModel(true)
  }

  function handleDetailClick(post) {
    setSelectedPost(post)
    setShowDetailModel(true)
  }

  function handleCloseDetailModel() {
    setSelectedPost(null)
    setShowDetailModel(false)
  }

  return isLoading ? (
    <Loading />
  ) : (
    <Box>
      <Stack position="relative" height={300} justifyContent="center" alignItems="center">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          width="100%"
          height="100%"
          component="img"
          alt="banner"
          src="https://picsum.photos/id/2/1368/300?blur=5"
          sx={{ objectFit: 'cover' }}
        />

        <Typography
          variant="h3"
          textAlign="center"
          fontWeight={500}
          position="relative"
          zIndex={2}
          color="white"
        >
          Posts management
        </Typography>
      </Stack>

      <Container>
        <Box sx={{ py: 1.5 }}>
          <Stack
            direction="row"
            alignItems="center"
            flexWrap="wrap"
            justifyContent="space-between"
            sx={{ my: { xs: 2, md: 3 } }}
          >
            <Box sx={{ my: { xs: 1, md: 2 }, width: { xs: '100%', sm: 'auto' } }}>
              <SearchBox onSearchChange={handleSearchChange} />
            </Box>

            <Box sx={{ width: { xs: '100%', sm: 'auto' } }}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => setShowAddEditModel(true)}
              >
                Add new post
              </Button>
            </Box>
          </Stack>

          <MyPostList
            postList={postList || []}
            onDetailClick={handleDetailClick}
            onEdit={handleEditPost}
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
              siblingCount={matches ? 1 : 0}
            />
          </Stack>
        </Box>

        <Dialog open={showAddEditModel} onClose={handleCloseAddEditModel} fullWidth maxWidth="md">
          <DialogTitle sx={{ fontWeight: 'bold' }}>
            {selectedPost ? 'Edit post' : 'Add new post'}
          </DialogTitle>

          <Divider />

          <DialogContent>
            <AddEditForm
              post={selectedPost}
              user={user}
              onFormSubmit={handleFormSubmit}
              onCancelClick={handleCloseAddEditModel}
            />
          </DialogContent>
        </Dialog>

        <Dialog open={showDetailModel} onClose={handleCloseDetailModel} fullWidth maxWidth="md">
          <DialogTitle sx={{ fontWeight: 'bold' }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">Post detail</Typography>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleCloseDetailModel}
              >
                <Close size="large" />
              </IconButton>
            </Stack>
          </DialogTitle>

          <Divider />

          <DialogContent>
            <SwanCard
              imageUrl={selectedPost?.imageUrl}
              avatar={selectedPost?.avatar}
              title={selectedPost?.title}
              description={selectedPost?.description}
              short_description={selectedPost?.short_description}
              showAllTitle
              showAllDesc
              showAllShortDesc
            />
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  )
}
