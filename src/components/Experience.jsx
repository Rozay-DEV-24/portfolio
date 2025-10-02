import React from 'react';
import { Container, Typography, Box, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Experience = ({ scrollY }) => {
  const experience = [
    {
      company: 'Tavya Sportsleap Consulting',
      role: 'Machine Learning Engineer',
      period: 'Feb 2022 - Aug 2025',
      highlights: [
        'Developed RAG assistant reducing lookup time by 60%',
        'Built demand forecasting models (28% accuracy improvement)',
        'Automated ETL pipelines for real-time analytics'
      ],
      color: '#FF6B6B'
    },
    {
      company: 'Nityo Infotech Services',
      role: 'Software Engineer (Contractor)',
      period: 'Jul 2021 - Jan 2024',
      highlights: [
        'Built React.js and Angular web apps for education workflows',
        'Developed mobile-first UI with React Native',
        'Optimized front-end architecture across products'
      ],
      color: '#4ECDC4'
    }
  ];

  return (
    <Box
      id="experience"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: 10,
        px: 2,
        backgroundColor: '#F9FAFB'
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '3rem', md: '5rem' },
            fontWeight: 900,
            mb: 6,
            color: '#FFE66D',
            transform: `translateX(${Math.min(0, 200 - (scrollY - 1500) * 0.5)}px)`,
            opacity: Math.min(1, Math.max(0, (scrollY - 1400) / 300))
          }}
        >
          Experience
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {experience.map((exp, index) => (
            <Card
              key={index}
              sx={{
                border: `4px solid ${exp.color}`,
                boxShadow: 5,
                transform: `translateX(${index % 2 === 0 ? Math.max(-150, (scrollY - 1800 - index * 200) * -0.3) : Math.min(150, (scrollY - 1800 - index * 200) * 0.3)}px)`,
                opacity: Math.min(1, Math.max(0, (scrollY - 1600 - index * 100) / 300)),
                '&:hover': {
                  boxShadow: 10,
                }
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', mb: 3 }}>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 900, color: exp.color, mb: 1 }}>
                      {exp.role}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#4B5563' }}>
                      {exp.company}
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ fontFamily: 'monospace', fontWeight: 'bold', color: '#6B7280', mt: { xs: 2, md: 0 } }}>
                    {exp.period}
                  </Typography>
                </Box>

                <List>
                  {exp.highlights.map((highlight, i) => (
                    <ListItem key={i} sx={{ px: 0 }}>
                      <ArrowForwardIcon sx={{ color: exp.color, mr: 2, fontSize: '2rem', fontWeight: 'bold' }} />
                      <ListItemText
                        primary={highlight}
                        primaryTypographyProps={{
                          fontSize: '1.1rem',
                          color: '#4B5563',
                          fontWeight: 500
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;