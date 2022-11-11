/* eslint-disable react-hooks/exhaustive-deps */
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import { Box, Button, Container, Pagination, Stack, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Loading } from '../../../components/Common/Loading'
import { CURRENT_LIMIT } from '../../../constants/common'
import { usePosts } from '../../../hooks/posts'
import { CardList } from '../components/CardList'

export function Search() {
  const [params, setParams] = useState({
    page: 1,
    limit: CURRENT_LIMIT,
  })

  const { searchKey } = useParams()
  const navigate = useNavigate()
  const matches = useMediaQuery('(min-width:414px)')

  const { postList, pagination, isLoading } = usePosts({
    ...params,
    searchKey: searchKey,
  })

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
          src="https://picsum.photos/id/3/1368/300?blur=5"
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
          Search Posts
        </Typography>
      </Stack>

      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Container>
          {Array.isArray(postList) && postList.length > 0 ? (
            <Stack>
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
            </Stack>
          ) : (
            <Stack alignItems="center" spacing={2}>
              <SentimentVeryDissatisfiedIcon sx={{ fontSize: 81 }} />
              <Typography> Oop! Post not found...</Typography>
              <Button variant="contained" color="primary" onClick={() => navigate(`/home`)}>
                Back home
              </Button>
            </Stack>
          )}
        </Container>
      </Box>
    </Box>
  )
}
