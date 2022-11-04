import React from 'react'
import { Box } from '@mui/material'
const banner =
  'https://demo.tagdiv.com/newspaper_shop_vintage_choppers_store/wp-content/uploads/2021/06/home-hero-1.jpg'

function MotionBanner(props) {
  return (
    <Box
      sx={{
        height: 600,
        backgroundImage: `url(${banner})`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    ></Box>
  )
}

export default MotionBanner
