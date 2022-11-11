import { Search } from '@mui/icons-material'
import {
  alpha,
  Avatar,
  Box,
  Chip,
  ClickAwayListener,
  Collapse,
  IconButton,
  InputAdornment,
  List,
  ListItemButton,
  Stack,
  Typography,
} from '@mui/material'

import debounce from 'lodash/debounce'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { InputField } from './InputField'

/* eslint-disable-next-line */

export function MainSearch({ postList, onSearchChange, onChange }) {
  const [open, setOpen] = useState(false)

  const [selectedValue, setSelectedValue] = useState('')

  const { control, handleSubmit } = useForm({
    defaultValues: {
      searchKey: '',
    },
  })

  const handleSearchChange = debounce((e) => {
    const value = e.target.value
    onSearchChange?.(value)
    setSelectedValue(value)
    setOpen(Boolean(value))
  }, 600)

  function handleChange(option) {
    onChange?.(option)
    setOpen(false)
  }

  function handleFormSubmit(values) {
    if (values && values.searchKey) {
      onChange?.(values.searchKey)
    }
    setOpen(false)
  }

  return (
    <Box
      width="100%"
      component="form"
      onSubmit={handleSubmit(handleFormSubmit)}
      sx={{
        borderRadius: '4px',

        bgcolor: (theme) => (open ? alpha(theme.palette.common.black, 0.5) : 'none'),

        '.MuiFormControl-root.MuiTextField-root': {
          p: 1,
          m: 0,
        },

        '& fieldset': {
          borderColor: (theme) => `${alpha(theme.palette.common.white, 0.25)} !important`,
        },
      }}
    >
      <InputField
        className="input-field"
        name="searchKey"
        type="search"
        placeholder="Search"
        variant="outlined"
        control={control}
        onChange={handleSearchChange}
        InputProps={{
          'aria-label': 'search',
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit" size="small" color="inherit">
                <Search />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          sx={{
            overflow: 'hidden',
          }}
        >
          <List
            component="div"
            disablePadding
            sx={{
              maxHeight: '200px',
              overflow: 'auto',
            }}
          >
            {Array.isArray(postList) &&
              postList.map((option, idx) => (
                <ListItemButton sx={{ pl: 2 }} key={idx} onClick={() => handleChange(option)}>
                  <Avatar sx={{ mr: 1 }} alt="logo" src={option?.avatar} />

                  <Typography variant="subtitle1" sx={{ flexGrow: 1 }} color="white">
                    {option?.title}
                  </Typography>

                  {option?.isLive === 'active' && (
                    <Chip sx={{ borderRadius: '4px', height: 20 }} color="error" label="Live" />
                  )}
                </ListItemButton>
              ))}

            <ListItemButton
              sx={{ pl: 2 }}
              onClick={() =>
                handleChange({
                  inputValue: selectedValue,
                  value: selectedValue,
                  label: selectedValue,
                })
              }
            >
              <Stack
                justifyContent="center"
                alignItems="center"
                sx={{ marginRight: '12px', cursor: 'pointer' }}
              >
                <Search />
              </Stack>

              <Typography variant="subtitle1" sx={{ flexGrow: 1 }} color="white">
                {selectedValue}
              </Typography>
            </ListItemButton>
          </List>
        </Collapse>
      </ClickAwayListener>
    </Box>
  )
}

export default MainSearch
