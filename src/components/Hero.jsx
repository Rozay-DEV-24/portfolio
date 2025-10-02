import React, { useCallback } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const Hero = ({ setActiveSection }) => {
  const scrollToSection = useCallback((sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [setActiveSection]);


  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        pt: 10,
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', md: '6rem' },
              fontWeight: 900,
              mb: 3,
              background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4, #FFE66D)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            ML Engineer & Full-Stack Developer
          </Typography>
          
          <Typography
            variant="h5"
            sx={{
              color: '#4B5563',
              fontWeight: 500,
              mb: 4,
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            6+ years building AI-powered tools, predictive models, and production-grade ML pipelines across sports tech, insurance, and education
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              justifyContent: 'center',
              mt: 4,
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => scrollToSection('projects')}
              sx={{
                backgroundColor: '#FF6B6B',
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#FF5252',
                  transform: 'scale(1.05)',
                }
              }}
            >
              View Projects
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="https://github.com/Rozay-DEV-24"
              target="_blank"
              sx={{
                borderColor: '#4ECDC4',
                color: '#4ECDC4',
                borderWidth: 2,
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                '&:hover': {
                  borderWidth: 2,
                  borderColor: '#4ECDC4',
                  transform: 'scale(1.05)',
                }
              }}
            >
              GitHub
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="https://linkedin.com/in/rohit-surya-avb"
              target="_blank"
              sx={{
                borderColor: '#FFE66D',
                color: '#FFE66D',
                borderWidth: 2,
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                '&:hover': {
                  borderWidth: 2,
                  borderColor: '#FFE66D',
                  transform: 'scale(1.05)',
                }
              }}
            >
              LinkedIn
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;