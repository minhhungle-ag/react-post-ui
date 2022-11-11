import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSearch } from '../../hooks/search'
import { Footer } from './Footer'
import { Header } from './Header'

export function MainLayout({ children }) {
  const [searchKey, setSearchKey] = useState('')
  const { postList } = useSearch({ searchKey: searchKey })

  const navigate = useNavigate()

  function handleFieldChange(value) {
    setSearchKey(value)
  }

  function handleSearchChange(values) {
    if (!values) return

    if (typeof values === 'string') {
      navigate(`/home/search/${values.toLowerCase()}`)
      return
    }

    const postId = values.id || ''
    const inputValue = values.inputValue || ''

    if (!postId) {
      navigate(`/home/search/${inputValue}`)
    }

    if (values?.id) {
      navigate(`/home/post-detail/${postId}`)
    }
    setSearchKey('')
  }

  return (
    <Stack width="100%" minHeight="100vh">
      <Header
        postList={postList}
        onSearchChange={handleFieldChange}
        onChange={handleSearchChange}
      />
      <Box flexGrow={1}>{children}</Box>
      <Footer />
    </Stack>
  )
}
