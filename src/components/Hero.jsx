import React, { useCallback } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import LiquidEther from './Animations/LiquidEther/LiquidEther';

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
        py: 10,
        position: 'relative',
        backgroundColor: '#000000',
        overflow: 'hidden'
      }}
    >
      {/* LiquidEther Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          opacity: 0.6
        }}
      >
        <LiquidEther
          colors={['#FF5252', '#27C2F5', '#F5C300']}
          mouseForce={25}
          cursorSize={120}
          isViscous={false}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.3}
          autoIntensity={1.8}
          takeoverDuration={0.3}
          autoResumeDelay={2000}
          autoRampDuration={0.8}
        />
      </Box>

      {/* Content Layer */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', md: '6rem' },
              fontWeight: 900,
              mb: 3,
              background: 'linear-gradient(135deg, rgb(248, 1, 1), rgb(19, 120, 236), rgb(244, 208, 25))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 40px rgba(255,255,255,0.1)'
            }}
          >
            Gen AI Engineer & Software Developer
          </Typography>
          
          <Typography
            variant="h5"
            sx={{
              color: '#bdd6ff',
              fontWeight: 500,
              mb: 4,
              maxWidth: '800px',
              mx: 'auto',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}
          >
            Building AI-powered tools, predictive models and production-grade ML pipelines across sports tech, insurance and education.
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
                backgroundColor: '#FF5252',
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                borderRadius: '30px',
                boxShadow: '0 4px 20px rgba(255, 82, 82, 0.4)',
                '&:hover': {
                  backgroundColor: '#FF6B6B',
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 30px rgba(255, 82, 82, 0.6)',
                }
              }}
            >
              Projects
            </Button>
            <Button
              variant="contained"
              size="large"
              href="https://github.com/Rozay-DEV-24"
              target="_blank"
              sx={{
                backgroundColor: '#27C2F5',
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                borderRadius: '30px',
                boxShadow: '0 4px 20px rgba(39, 194, 245, 0.4)',
                '&:hover': {
                  backgroundColor: '#93D4ED',
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 30px rgba(39, 194, 245, 0.6)',
                }
              }}
            >
              GitHub
            </Button>
            <Button
              variant="contained"
              size="large"
              href="https://linkedin.com/in/rohit-surya-avb"
              target="_blank"
              sx={{
                backgroundColor: '#F5C300',
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                borderRadius: '30px',
                boxShadow: '0 4px 20px rgba(245, 195, 0, 0.4)',
                '&:hover': {
                  backgroundColor: '#FAD74B',
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 30px rgba(245, 195, 0, 0.6)',
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