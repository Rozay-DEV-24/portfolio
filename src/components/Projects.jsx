import React, { useMemo } from 'react';
import { Container, Typography, Box, Card, CardContent, Grid } from '@mui/material';

const Projects = () => {
  const projects = useMemo(() => [
    { 
      title: 'AI Knowledge Assistant', 
      tech: 'Hugging Face, ChromaDB, Gemini API, Docker', 
      desc: 'Full-stack RAG system with secure document search, local embedding-based privacy, and streaming chat interface in vanilla JS',
      color: '#FF6B6B'
    },
    { 
      title: 'Edge-AI Videometrics MVP', 
      tech: 'YOLO, ByteTrack, FastAPI, React, Tailwind', 
      desc: 'Video analytics pipeline for racket sports with player tracking, heatmap generation, and edge-device deployment',
      color: '#4ECDC4'
    },
    { 
      title: 'UA Nav Access', 
      tech: 'OCR (Tesseract), LangChain, LLaMA VLM, FastAPI', 
      desc: 'AI-powered navigation tool for visually impaired users with building recognition and geolocation services',
      color: '#FFE66D'
    },
    { 
      title: 'Transformer Sentiment Classifier', 
      tech: 'DistilRoBERTa, TensorFlow, Keras, Hugging Face', 
      desc: 'Fine-tuned transformer model for multi-label sentiment classification with optimized F1-score evaluation',
      color: '#A8E6CF'
    },
    { 
      title: 'RAG Policy Assistant', 
      tech: 'Hugging Face, ChromaDB, Gemini API', 
      desc: 'Reduced policy lookup time by 60% for Tavya Sportsleap with intelligent document retrieval',
      color: '#FF8B94'
    },
    { 
      title: 'Demand Forecasting System', 
      tech: 'Python, TensorFlow, Tableau', 
      desc: 'ML model improving facility booking accuracy by 28% with automated ETL pipelines and analytics dashboards',
      color: '#B4A7D6'
    }
  ], []);


  return (
    <Box
      id="projects"
      sx={{
        minHeight: '100vh',
        py: 10,
        px: 2,
        minWidth: '100vw'
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '3rem', md: '5rem' },
            fontWeight: 900,
            mb: 6,
            textAlign: 'center',
            color: '#FF8B94',
          }}
        >
          Featured Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    border: `4px solid ${project.color}`,
                    height: '100%',
                    boxShadow: 5,
                    cursor: 'pointer',
                    '&:hover': {
                      boxShadow: 10,
                      transform: 'scale(1.05)',
                    }
                  }}
                >
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 900, color: project.color, mb: 2 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: 'monospace', fontWeight: 'bold', color: '#6B7280', mb: 2 }}>
                    {project.tech}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#4B5563', lineHeight: 1.7 }}>
                    {project.desc}
                  </Typography>
                </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;