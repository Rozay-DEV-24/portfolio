import React from 'react';
import { Container, Typography, Box, Chip } from '@mui/material';

const About = ({ scrollY }) => {
  const tags = ['Full-Stack Development', 'Predictive Analytics', 'LLM Integration', 'MLOps', 'Cloud Deployment'];
  const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF', '#FF8B94'];

  return (
    <Box
      id="about"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: 10,
        px: 2
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '3rem', md: '5rem' },
            fontWeight: 900,
            mb: 6,
            color: '#4ECDC4',
            transform: `translateX(${Math.min(0, -200 + (scrollY - 500) * 0.5)}px)`,
            opacity: Math.min(1, Math.max(0, (scrollY - 400) / 300))
          }}
        >
          About Me
        </Typography>

        <Box
          sx={{
            backgroundColor: 'white',
            border: '4px solid #4ECDC4',
            p: 5,
            boxShadow: 5,
            transform: `translateY(${Math.max(-100, -scrollY * 0.1 + 100)}px)`,
            opacity: Math.min(1, Math.max(0, (scrollY - 500) / 300))
          }}
        >
          <Typography variant="h6" sx={{ color: '#4B5563', mb: 3, lineHeight: 1.8 }}>
            Results-driven Software and Machine Learning Engineer with 6+ years of experience developing AI-powered tools, forecasting models, and full-stack applications. I specialize in delivering production-grade ML pipelines, intelligent systems, and data-driven solutions.
          </Typography>
          <Typography variant="h6" sx={{ color: '#4B5563', mb: 3, lineHeight: 1.8 }}>
            Currently pursuing my Master's in Information Science with a Machine Learning emphasis at the University of Arizona (GPA: 3.44), I combine strong academic foundations with real-world industry experience from companies like Tavya Sportsleap, Nityo Infotech, and more.
          </Typography>
          <Typography variant="h6" sx={{ color: '#4B5563', mb: 4, lineHeight: 1.8 }}>
            I'm passionate about leveraging data and AI to drive innovation, accessibility, and business outcomes. My expertise spans the full stack—from building RAG systems and computer vision pipelines to designing responsive UIs and deploying cloud-native solutions.
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 4 }}>
            {tags.map((tag, index) => (
              <Chip
                key={tag}
                label={tag}
                sx={{
                  backgroundColor: colors[index],
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '0.95rem',
                  px: 2,
                  py: 3
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;