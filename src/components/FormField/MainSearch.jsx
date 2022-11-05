import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'
import { alpha } from '@mui/material'

const filter = createFilterOptions()

export default function MainSearch({ postList, onFieldChange, onChange }) {
  const [value, setValue] = React.useState(null)

  function handleInputChange(e) {
    const value = e.target.value

    onFieldChange?.(value)
  }

  function handleChange(event, newValue) {
    if (typeof newValue === 'string') {
      setValue({
        title: newValue,
      })
    } else if (newValue && newValue.title) {
      // Create a new value from the user input
      setValue({
        title: newValue.title,
      })
    } else {
      setValue(newValue)
    }

    onChange?.(newValue)
  }

  return (
    <Autocomplete
      value={value}
      onChange={handleChange}
      filterOptions={(options, params) => {
        const filtered = filter(options, params)

        const { inputValue } = params
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.title)
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            title: `Search "${inputValue}"`,
          })
        }

        return filtered
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={(Array.isArray(postList) && postList) || []}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue
        }
        // Regular option
        return option.title
      }}
      renderOption={(props, option) => <li {...props}>{option.title}</li>}
      sx={{
        width: 300,

        '.MuiInputBase-root *': {
          color: (theme) => alpha(theme.palette.common.white, 0.7),
        },

        '.MuiInputBase-root fieldset': {
          border: '1px solid !important',
          borderColor: (theme) => `${alpha(theme.palette.common.white, 0.15)} !important`,
        },
      }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} placeholder="Search..." onChange={handleInputChange} />
      )}
    />
  )
}
