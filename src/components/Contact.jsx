import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Card, CardContent, Link } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for reaching out!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: '', email: '', message: '' });
  };


  return (
    <Box
      id="contact"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        // py: 10,
        // px: 2
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '3rem', md: '5rem' },
            fontWeight: 900,
            mb: 6,
            textAlign: 'center',
            color: '#fc4242',
          }}
        >
          Get In Touch
        </Typography>

        <Card
          sx={{
            border: '4px solid #fc4242',
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#fc4242',
                  py: 2,
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#FF6B6B',
                  }
                }}
              >
                Send Message
              </Button>
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