import React from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = ({ scrollY }) => {
  const contactItems = [
    {
      icon: <GitHubIcon sx={{ fontSize: '4rem' }} />,
      label: 'GitHub',
      link: 'https://github.com/Rozay-DEV-24',
      color: '#333333'
    },
    {
      icon: <LinkedInIcon sx={{ fontSize: '4rem' }} />,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/rohit-surya-avb',
      color: '#0077B5'
    },
    {
      icon: <EmailIcon sx={{ fontSize: '4rem' }} />,
      label: 'Email',
      link: 'mailto:brohitsurya24@gmail.com',
      color: '#EA4335'
    },
    {
      icon: <PhoneIcon sx={{ fontSize: '4rem' }} />,
      label: 'Phone',
      link: 'tel:+15203698916',
      color: '#34A853'
    }
  ];

  return (
    <Box
      id="contact"
      sx={{
        // minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: 8,
        px: 2,
        backgroundColor: '#000000ff'
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '3rem', md: '5rem' },
              fontWeight: 900,
              color: '#ffffffff',
              mb: 2,
              transform: `translateY(${Math.max(-100, (scrollY - 5500) * -0.2)}px)`,
              opacity: Math.min(1, Math.max(0, (scrollY - 5400) / 300))
            }}
          >
            Let's Connect!
          </Typography>
          
          <Box
            sx={{
              width: '700px',
              height: '4px',
              backgroundColor: '#ffffffff',
              margin: '0 auto 6rem auto',
              borderRadius: '2px',
              transform: `scaleX(${Math.min(1, Math.max(0, (scrollY - 5500) / 300))})`,
            }}
          />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: { xs: 4, md: 6 },
              flexWrap: 'wrap',
              transform: `translateY(${Math.max(-100, (scrollY - 5700) * -0.15)}px)`,
              opacity: Math.min(1, Math.max(0, (scrollY - 5600) / 300))
            }}
          >
            {contactItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: 'center',
                  transform: `translateY(${Math.max(-50, (scrollY - 5800 - index * 100) * -0.1)}px)`,
                  opacity: Math.min(1, Math.max(0, (scrollY - 5700 - index * 50) / 200))
                }}
              >
                <IconButton
                  component="a"
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : '_self'}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  sx={{
                    width: 120,
                    height: 120,
                    border: `4px solid ${item.color}`,
                    backgroundColor: 'transparent',
                    color: item.color,
                    mb: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: item.color,
                      color: 'white',
                      transform: 'scale(1.1)',
                      boxShadow: `0 0 30px ${item.color}50`
                    }
                  }}
                >
                  {item.icon}
                </IconButton>
                
                <Typography
                  variant="h2"
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.5rem'
                  }}
                >
                  {item.label}
                </Typography>
                
                <Typography
                  variant="h2"
                  sx={{
                    color: '#888888',
                    fontSize: '1rem',
                    fontFamily: 'monospace',
                    mt: 1
                  }}
                >
                  {item.label === 'Email' && 'brohitsurya24@gmail.com'}
                  {item.label === 'Phone' && '+1 (520) 369-8916'}
                  {item.label === 'GitHub' && '@Rozay-DEV-24'}
                  {item.label === 'LinkedIn' && '/in/rohit-surya-avb'}
                </Typography>
              </Box>
            ))}
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default Contact;