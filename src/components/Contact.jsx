import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Card, CardContent, Link } from '@mui/material';
import EncryptButton from './Animations/EncryptButton/EncryptButton';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      alert('Failed to send message. Please try again.');
      console.error(error);
    });
  };

  return (
    <Box
      id="contact"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#000000'
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '3rem', md: '5rem' },
              fontWeight: 900,
              color: '#0394fc',
              mb: 2
            }}
          >
            Hire Me !
          </Typography>
          <Box
            sx={{
              width: '400px',
              height: '4px',
              backgroundColor: '#0394fc',
              margin: '0 auto',
              borderRadius: '2px'
            }}
          />
        </Box>

        <Card
          sx={{
            border: '4px solid #ffffff',
            boxShadow: 5,
            mb: 4,
          }}
        >
          <CardContent sx={{ p: 5 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                sx={{ mb: 3 }}
                InputProps={{
                  style: { fontSize: '1.1rem', fontWeight: 500 }
                }}
              />
              <TextField
                fullWidth
                label="Your Email"
                type="email"
                variant="outlined"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                sx={{ mb: 3 }}
                InputProps={{
                  style: { fontSize: '1.1rem', fontWeight: 500 }
                }}
              />
              <TextField
                fullWidth
                label="Your Message"
                multiline
                rows={6}
                variant="outlined"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                sx={{ mb: 3 }}
                InputProps={{
                  style: { fontSize: '1.1rem', fontWeight: 500 }
                }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <EncryptButton
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    py: 2,
                    px: 6,
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                  }}
                >
                  Send Message
                </EncryptButton>
              </Box>
            </form>
          </CardContent>
        </Card>

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#4B5563', mb: 2 }}>
            Or reach me directly at:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3 }}>
            <Link
              href="mailto:brohitsurya24@gmail.com"
              underline="hover"
              sx={{
                fontSize: '1.1rem',
                fontFamily: 'monospace',
                fontWeight: 'bold',
                color: '#fc4242',
                '&:hover': {
                  opacity: 0.7,
                }
              }}
            >
              brohitsurya24@gmail.com
            </Link>
            <Link
              href="tel:+15203698916"
              underline="hover"
              sx={{
                fontSize: '1.1rem',
                fontFamily: 'monospace',
                fontWeight: 'bold',
                color: '#4ECDC4',
                '&:hover': {
                  opacity: 0.7,
                }
              }}
            >
              +1 (520) 369-8916
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;