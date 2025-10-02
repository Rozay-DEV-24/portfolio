import React, { useMemo } from 'react';
import { Container, Typography, Box, LinearProgress, Card, CardContent, Grid } from '@mui/material';

const Skills = () => {
  const skills = useMemo(() => [
    { name: 'Python & Machine Learning', level: 95, color: '#FF6B6B' },
    { name: 'TensorFlow & PyTorch', level: 90, color: '#4ECDC4' },
    { name: 'React & JavaScript', level: 92, color: '#FFE66D' },
    { name: 'FastAPI & Node.js', level: 88, color: '#A8E6CF' },
    { name: 'SQL & MongoDB', level: 85, color: '#FF8B94' },
    { name: 'Docker & MLOps', level: 87, color: '#B4A7D6' },
    { name: 'Data Engineering', level: 90, color: '#95E1D3' },
    { name: 'LLM Integration', level: 93, color: '#F38181' }
  ], []);


  return (
    <Box
      id="skills"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: 10,
        px: 2,
        backgroundColor: '#F9FAFB'
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
              color: '#B4A7D6',
            }}
          >
            Technical Skills
          </Typography>

        <Box sx={{ mb: 6 }}>
          {skills.map((skill, index) => (
              <Box
                key={index}
                sx={{
                  mb: 4,
                }}
              >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#4B5563' }}>
                  {skill.name}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: skill.color }}>
                  {skill.level}%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={skill.level}
                sx={{
                  height: 24,
                  borderRadius: 1,
                  backgroundColor: '#E5E7EB',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: skill.color,
                  }
                }}
              />
              </Box>
            ))}
        </Box>

        <Card
          sx={{
            border: '4px solid #95E1D3',
            boxShadow: 5,
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 900, color: '#95E1D3', mb: 3 }}>
              Core Technologies
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" sx={{ fontWeight: 900, color: '#FF6B6B', mb: 2 }}>
                  ML/AI
                </Typography>
                <Typography variant="body1" sx={{ color: '#4B5563' }}>TensorFlow, PyTorch</Typography>
                <Typography variant="body1" sx={{ color: '#4B5563' }}>Hugging Face</Typography>
                <Typography variant="body1" sx={{ color: '#4B5563' }}>Scikit-Learn</Typography>
                <Typography variant="body1" sx={{ color: '#4B5563' }}>OpenAI API</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" sx={{ fontWeight: 900, color: '#4ECDC4', mb: 2 }}>
                  Web/Backend
                </Typography>
                <Typography variant="body1" sx={{ color: '#4B5563' }}>FastAPI, React.js</Typography>
                <Typography variant="body1" sx={{ color: '#4B5563' }}>Node.js, Angular</Typography>
                <Typography variant="body1" sx={{ color: '#4B5563' }}>ASP.NET, Redux</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" sx={{ fontWeight: 900, color: '#FFE66D', mb: 2 }}>
                  Data & DevOps
                </Typography>
                <Typography variant="body1" sx={{ color: '#4B5563' }}>SQL, MongoDB</Typography>
                <Typography variant="body1" sx={{ color: '#4B5563' }}>Docker, Git</Typography>
                <Typography variant="body1" sx={{ color: '#4B5563' }}>Tableau, Pandas</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Skills;