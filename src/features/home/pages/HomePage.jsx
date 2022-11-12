import { Close } from '@mui/icons-material'
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Pagination,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Banner } from '../../../components/Common/Banner'
import { Loading } from '../../../components/Common/Loading'
import { usePosts } from '../../../hooks/posts'
import CardBanner from '../components/CardBanner'
import { CardList } from '../components/CardList'
import GalleryList from '../components/GalleryList'
import MotionBanner from '../components/MotionBanner'

const currentPost = {
  title: 'Top Hikes In Australia',
  author: 'Anna Martin',
  avatar:
    'https://static.wixstatic.com/media/2e2a49_d456d06d41b346d3b36f426cb4142859~mv2.jpg/v1/fill/w_571,h_596,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2e2a49_d456d06d41b346d3b36f426cb4142859~mv2.jpg',
  short_description:
    'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.',
  description:
    'Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more. You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow visitors to explore more of what interests them. Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags throughout your posts to reach more people, and help visitors search for relevant content. Blogging gives your site a voice, so let your business’ personality shine through. Choose a great image to feature in your post or add a video for extra engagement. Are you ready to get started? Simply create a new post now.',
  imageUrl:
    'https://static.wixstatic.com/media/2e2a49_e517229392d74f7498b1f7be7a78efee~mv2.jpg/v1/fill/w_365,h_206,fp_0.50_0.50,q_90,enc_auto/2e2a49_e517229392d74f7498b1f7be7a78efee~mv2.jpg',
  createdAt: '2022-10-23T09:05:21.619Z',
  updatedAt: '2022-10-23T09:05:21.619Z',
}

export function HomePage(props) {
  const [latedPost, setLatestPost] = useState(currentPost)
  const [selectedImage, setSelectedImage] = useState('')
  const [params, setParams] = useState({
    page: 1,
    limit: 6,
  })

  const [open, setOpen] = React.useState(false)

  const { postList, pagination, isLoading } = usePosts(params)
  const navigate = useNavigate()
  const matches = useMediaQuery('(min-width:414px)')

  useEffect(() => {
    if (postList && postList[0]) {
      setLatestPost(postList[0])
    }
  }, [postList])

  const handleClose = () => {
    setOpen(false)
  }

  function handleImageClick(img) {
    setSelectedImage(img)
    setOpen(true)
  }

  return isLoading ? (
    <Loading />
  ) : (
    <Box>
      <Banner />

      <Box sx={{ position: 'relative', mt: { xs: 8, sm: -15, md: -30, lg: -40 }, zIndex: 2 }}>
        <Container>
          <CardBanner post={latedPost} />
        </Container>
      </Box>

      <Box sx={{ my: 8 }}>
        <Container>
          <Typography variant="h3" textAlign="center" fontWeight={500} sx={{ mb: 6 }}>
            Latest post
          </Typography>

          <CardList
            postList={postList || []}
            onCardClick={(postId) => navigate(`/home/post-detail/${postId}`)}
          />

          <Stack direction="row" alignItems="center" justifyContent="center" sx={{ mt: 6 }}>
            <Pagination
              count={pagination?.total_page}
              onChange={(event, page) => setParams({ ...params, page: page })}
              variant="outlined"
              shape="rounded"
              page={params.page}
              siblingCount={matches ? 1 : 0}
            />
          </Stack>
        </Container>
      </Box>

      <Box sx={{ my: 8 }}>
        <MotionBanner />
      </Box>
      <Box sx={{ my: 8 }}>
        <Typography variant="h3" textAlign="center" fontWeight={500} sx={{ mb: 6 }}>
          Gallery list
        </Typography>

        <Box sx={{ p: 2 }}>
          <GalleryList onImageClick={handleImageClick} />
        </Box>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h6">Light box</Typography>
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={() => setOpen(false)}>
              <Close size="large" />
            </IconButton>
          </Stack>
        </DialogTitle>

        <DialogContent>
          <Box>
            <Box component="img" alt="" src={selectedImage} width="100%" />
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  )
}
