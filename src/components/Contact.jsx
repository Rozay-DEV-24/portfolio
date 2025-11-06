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
        display: 'flex',
        alignItems: 'center',
        minHeight: '100vh',
        py: 10,
        px: 2,
        backgroundColor: '#000000',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* CSS-only Liquid Ether Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 20% 80%, #0394fc40 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #00ffff30 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, #8a2be240 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, #ff149320 0%, transparent 50%),
            radial-gradient(circle at 10% 30%, #00ff0025 0%, transparent 50%)
          `,
          animation: 'liquidFlow 12s ease-in-out infinite',
          '@keyframes liquidFlow': {
            '0%': { 
              transform: 'scale(1) rotate(0deg)',
              filter: 'blur(2px)'
            },
            '25%': { 
              transform: 'scale(1.1) rotate(90deg)',
              filter: 'blur(3px)'
            },
            '50%': { 
              transform: 'scale(1.2) rotate(180deg)',
              filter: 'blur(2px)'
            },
            '75%': { 
              transform: 'scale(1.1) rotate(270deg)',
              filter: 'blur(4px)'
            },
            '100%': { 
              transform: 'scale(1) rotate(360deg)',
              filter: 'blur(2px)'
            }
          }
        }}
      />

      {/* Floating particles */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '20%',
            left: '15%',
            width: '8px',
            height: '8px',
            backgroundColor: '#0394fc',
            borderRadius: '50%',
            animation: 'float1 6s ease-in-out infinite',
            boxShadow: '0 0 15px #0394fc'
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '60%',
            right: '20%',
            width: '6px',
            height: '6px',
            backgroundColor: '#00ffff',
            borderRadius: '50%',
            animation: 'float2 8s ease-in-out infinite',
            boxShadow: '0 0 12px #00ffff'
          },
          '@keyframes float1': {
            '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
            '50%': { transform: 'translateY(-30px) translateX(20px)' }
          },
          '@keyframes float2': {
            '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
            '50%': { transform: 'translateY(-25px) translateX(-15px)' }
          }
        }}
      />

      {/* Additional animated orbs */}
      {[...Array(5)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            width: `${60 + i * 20}px`,
            height: `${60 + i * 20}px`,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${
              ['#0394fc', '#00ffff', '#8a2be2', '#ff1493', '#00ff00'][i]
            }20, transparent 70%)`,
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
            animation: `orbit${i} ${8 + i * 2}s linear infinite`,
            '@keyframes orbit0': {
              '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
              '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' }
            },
            '@keyframes orbit1': {
              '0%': { transform: 'rotate(0deg) translateX(80px) rotate(0deg)' },
              '100%': { transform: 'rotate(-360deg) translateX(80px) rotate(360deg)' }
            },
            '@keyframes orbit2': {
              '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
              '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' }
            },
            '@keyframes orbit3': {
              '0%': { transform: 'rotate(0deg) translateX(90px) rotate(0deg)' },
              '100%': { transform: 'rotate(-360deg) translateX(90px) rotate(360deg)' }
            },
            '@keyframes orbit4': {
              '0%': { transform: 'rotate(0deg) translateX(110px) rotate(0deg)' },
              '100%': { transform: 'rotate(360deg) translateX(110px) rotate(-360deg)' }
            }
          }}
        />
      ))}

      {/* Content with higher z-index */}
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '3rem', md: '5rem' },
              fontWeight: 900,
              color: '#ffffff',
              mb: 2,
              textShadow: '0 0 10px #0394fc50',
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
              background: 'linear-gradient(90deg, #0394fc, #00ffff, #0394fc)',
              margin: '0 auto 6rem auto',
              borderRadius: '2px',
              boxShadow: '0 0 10px #0394fc50',
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
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    color: item.color,
                    mb: 2,
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: item.color,
                      color: 'white',
                      transform: 'scale(1.1)',
                      boxShadow: `0 0 30px ${item.color}70`
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
                    fontSize: '1.5rem',
                    textShadow: '0 0 5px rgba(255, 255, 255, 0.3)'
                  }}
                >
                  {item.label}
                </Typography>
                
                <Typography
                  variant="h2"
                  sx={{
                    color: '#cccccc',
                    fontSize: '1rem',
                    fontFamily: 'monospace',
                    mt: 1,
                    textShadow: '0 0 3px rgba(255, 255, 255, 0.2)'
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