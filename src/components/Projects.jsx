import React, { useMemo } from 'react';
import { Container, Typography, Box, Card, CardContent, Grid } from '@mui/material';
import DecryptedText from './Animations/DecryptedText';
import ElectricBorder from './Animations/ElectricCard/ElectricCard';

const Projects = () => {
  const projects = useMemo(() => [
    {
      title: 'AI Knowledge Assistant',
      tech: 'Hugging Face, ChromaDB, Gemini API, Docker',
      desc: 'Full-stack RAG system with secure document search, local embedding-based privacy, and streaming chat interface in vanilla JS',
      color: '#ff9900',
      link: 'https://github.com/yourusername/ai-knowledge-assistant'
    },
    {
      title: 'Edge-AI Videometrics MVP',
      tech: 'YOLO, ByteTrack, FastAPI, React, Tailwind',
      desc: 'Video analytics pipeline for racket sports with player tracking, heatmap generation, and edge-device deployment',
      color: '#0490d6',
      link: 'https://github.com/yourusername/edge-ai-videometrics'
    },
    {
      title: 'UA Nav Access',
      tech: 'OCR (Tesseract), LangChain, LLaMA VLM, FastAPI',
      desc: 'AI-powered navigation tool for visually impaired users with building recognition and geolocation services',
      color: '#fa1c14',
      link: 'https://github.com/yourusername/ua-nav-access'
    },
    {
      title: 'Transformer Sentiment Classifier',
      tech: 'DistilRoBERTa, TensorFlow, Keras, Hugging Face',
      desc: 'Fine-tuned transformer model for multi-label sentiment classification with optimized F1-score evaluation',
      color: '#e6ca30',
      link: 'https://github.com/yourusername/transformer-sentiment'
    },
    {
      title: 'RAG Policy Assistant',
      tech: 'Hugging Face, ChromaDB, Gemini API',
      desc: 'Reduced policy lookup time by 60% for Tavya Sportsleap with intelligent document retrieval',
      color: '#8e50cc',
      link: 'https://github.com/yourusername/rag-policy-assistant'
    },
    {
      title: 'Demand Forecasting System',
      tech: 'Python, TensorFlow, Tableau',
      desc: 'ML model improving facility booking accuracy by 28% with automated ETL pipelines and analytics dashboards',
      color: '#7ad100',
      link: 'https://github.com/yourusername/demand-forecasting'
    }
  ], []);

  return (
    <Box
      id="projects"
      sx={{
        minHeight: '100vh',
        py: 10,
        px: 2,
        backgroundColor: '#1F2937',
        minWidth: '100vw'
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '3rem', md: '5rem' },
            fontWeight: 900,
            mb: 6,
            textAlign: 'center',
            color: '#ffffff',
          }}
        >
          Featured Projects
        </Typography>
        <Box
            sx={{
              width: '800px',
              height: '4px',
              backgroundColor: '#ffffff',
              margin: '0 auto',
              borderRadius: '2px'
            }}
          />

        <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ElectricBorder
                color={project.color}
                speed={1.2}
                chaos={0.8}
                thickness={3}
                style={{ borderRadius: '8px' }}
              >
                <Card
                  onClick={() => window.open(project.link, '_blank')}
                  sx={{
                    width: '350px',
                    minHeight: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: 5,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    margin: '0 auto',
                    backgroundColor: '#1a1a1a',
                    border: 'none',
                    '&:hover': {
                      boxShadow: 10,
                      transform: 'scale(1.05)',
                    }
                  }}
                >
                  <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column' }}>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontWeight: 900, 
                        color: project.color, 
                        mb: 2,
                        wordWrap: 'break-word',
                        whiteSpace: 'normal'
                      }}
                    >
                      {project.title}
                    </Typography>
                    
                    <Typography 
                      variant="body2" 
                      component="div"
                      sx={{ 
                        fontFamily: 'monospace', 
                        fontWeight: 'bold', 
                        color: '#9CA3AF', 
                        mb: 2,
                        wordWrap: 'break-word',
                        whiteSpace: 'normal'
                      }}
                    >
                      <DecryptedText
                        text={project.tech}
                        animateOn="hover"
                        speed={50}
                        maxIterations={15}
                        revealDirection="start"
                      />
                    </Typography>
                    
                    <Typography 
                      variant="body1" 
                      component="div"
                      sx={{ 
                        color: '#D1D5DB', 
                        lineHeight: 1.7,
                        wordWrap: 'break-word',
                        whiteSpace: 'normal'
                      }}
                    >
                      <DecryptedText
                        text={project.desc}
                        animateOn="hover"
                        speed={30}
                        maxIterations={12}
                        revealDirection="start"
                      />
                    </Typography>
                  </CardContent>
                </Card>
              </ElectricBorder>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;