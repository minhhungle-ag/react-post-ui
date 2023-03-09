import { Box, Container, Typography } from '@mui/material'
import { toast } from 'react-toastify'
import { useContact } from '../../hooks/contact'
import { ContactForm } from '../About/components/ContactForm'

export function Contact() {
  const { addMutation } = useContact()

  async function handleFormSubmit(formValues) {
    try {
      await addMutation.mutateAsync(formValues)

      toast.success('Submit success, thanks for your contact')
    } catch (error) {
      console.log(error)
      toast.error('Submit failed')
    }
  }
  return (
    <Box>
      <Container>
        <Box sx={{ my: { xs: 4, md: 8 } }}>
          <Typography
            variant="h4"
            marginBottom={2}
            fontWeight={700}
            textAlign="center"
            textTransform="uppercase"
          >
            Contact
          </Typography>

          <Box sx={{ m: '0 auto', maxWidth: 768 }}>
            <ContactForm onFormSubmit={handleFormSubmit} />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
