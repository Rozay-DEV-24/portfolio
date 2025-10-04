import React, { useMemo } from 'react';
import { Container, Typography, Box, Chip } from '@mui/material';

const About = () => {
  const tags = useMemo(() => ['Full-Stack Development', 'Predictive Analytics', 'LLM Integration', 'MLOps', 'Cloud Deployment'], []);
  const colors = useMemo(() => ['#E60000', '#00b392', '#F5C300', '#6FE600', '#2884fc'], []);

  return (
    <Box
      id="about"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#1F2937',
        py: 10,
        px: 2
      }}
    >
      <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '3rem', md: '5rem' },
            fontWeight: 900,
            mb: 2,
            color: '#ffffff'
          }}
        >
          About Me
        </Typography>
        <Box
          sx={{
            width: '450px',
            height: '4px',
            backgroundColor: '#ffffff',
            margin: '0 auto',
            borderRadius: '2px'
          }}
        />
      </Box>

        <Box
          sx={{
            backgroundColor: 'white',
            border: '4px solid rgb(101, 183, 249)',
            p: 5,
            boxShadow: 5
          }}
        >
          <Typography variant="h6" sx={{ color: '#4B5563', mb: 3, lineHeight: 1.8 }}>
            As a Machine Learning Engineer with a Master of Science in Information Science from the University of Arizona, I specialize in developing and deploying impactful AI solutions. My current F1 OPT status allows me to seek and accept employment in the U.S.
          </Typography>
          <Typography variant="h6" sx={{ color: '#4B5563', mb: 3, lineHeight: 1.8 }}>
            In my recent role as a Gen AI Engineer, I have demonstrated my ability to deliver tangible business results. I successfully designed and deployed an internal RAG-based AI assistant that cut document lookup times by 60%. Additionally, I developed time-series forecasting models that improved facility booking accuracy by 28%. My hands-on projects, such as building a secure AI knowledge assistant and a navigation tool for the visually impaired using a Vision Language Model, further showcase my expertise in creating end-to-end AI systems.
          </Typography>
          <Typography variant="h6" sx={{ color: '#4B5563', mb: 4, lineHeight: 1.8 }}>
          My background is complemented by experience as a Software Associate and Project coordinator, where I honed my skills in full-stack web and mobile development using technologies like React and .NET. I possess a strong command of Python, SQL and various Machine Learning / Larege Language Model frameworks including Sci-kit learnTensorFlow, PyTorch and Hugging Face, with practical experience on the Azure cloud platform. Combining my technical depth with a background in project coordination and customer acquisition, I am adept at translating complex requirements into robust, user-centric applications.
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