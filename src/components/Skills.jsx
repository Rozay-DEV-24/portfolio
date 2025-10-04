import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Skills = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: 'Python, SQL',
      color: '#FF6B6B'
    },
    {
      category: 'Web Development',
      items: 'HTML, CSS, JavaScript, React, Node.js, FastAPI, ASP.NET',
      color: '#02b6de'
    },
    {
      category: 'Data Science & Analytics',
      items: 'Pandas, NumPy, Matplotlib, Seaborn',
      color: '#FFE66D'
    },
    {
      category: 'Machine Learning and LLM\'s',
      items: 'Scikit-Learn, TensorFlow, PyTorch, Hugging Face, RAG, OCR',
      color: '#0084ff'
    },
    {
      category: 'Cloud Platforms',
      items: 'Microsoft Azure',
      color: '#2ebf02'
    },
    {
      category: 'DevOps',
      items: 'Docker, Github Actions',
      color: '#F4A261'
    }
  ];

  return (
    <Box
      id="skills"
      sx={{
        display: 'flex',
        alignItems: 'center',
        py: 10,
        px: 2,
        backgroundColor: '#000000'
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '3rem', md: '5rem' },
              fontWeight: 900,
              mb: 2,
              color: '#ffc800',
            }}
          >
            Skills
          </Typography>
          <Box
            sx={{
              width: '250px',
              height: '4px',
              backgroundColor: '#ffc800',
              margin: '0 auto',
              borderRadius: '2px'
            }}
          />
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'left' }}>
          {skills.map((skill, index) => (
            <Box key={index} sx={{ textAlign: 'left', maxWidth: '100%' }}>
              <Typography
                variant="h5"
                component="span"
                sx={{
                  fontWeight: 900,
                  color: skill.color,
                  fontSize: { xs: '1.25rem', md: '1.5rem' }
                }}
              >
                {skill.category}
              </Typography>
              <Typography
                variant="h6"
                component="span"
                sx={{
                  color: '#ffffff',
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  ml: 1
                }}
              >
                : {skill.items}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;