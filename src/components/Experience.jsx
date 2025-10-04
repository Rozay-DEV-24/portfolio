import React, { useMemo } from 'react';
import { Container, Typography, Box, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Experience = () => {
  const experience = useMemo(() => [
    {
      company: 'Tavya Sportsleap Consulting',
      role: 'Gen AI Engineer',
      period: 'Feb 2024 - Aug 2025',
      highlights: [
        'Developed RAG assistant reducing lookup time by 60%',
        'Built demand forecasting models (28% accuracy improvement)',
        'Automated ETL pipelines for real-time analytics'
      ],
      color: '#c9342e'
    },
    {
      company: 'Nityo Infotech Services',
      role: 'Software Engineer',
      period: 'Jul 2021 - Jan 2024',
      highlights: [
        'Built React.js and Angular web apps for education workflows',
        'Developed mobile-first UI with React Native',
        'Optimized front-end architecture across products'
      ],
      color: '#2c87db'
    },
    {
      company: 'Tavya Sportsleap Consulting',
      role: 'Software Engineer (Application & Integration)',
      period: 'Feb 2024 - Aug 2025',
      highlights: [
        'Designed and launched a sports facility booking platform with Turftown, boosting online reservations by 35% and creating stable monthly revenue streams.',
        'Worked on internal web apps using React to analyze usage patterns, supporting 30K+ users across five locations.',
        'Consolidated data from marketing, CRM and payment APIs into a centralized reporting system, accelerating cross-department decision-making.'
      ],
      color: '#05e3c2'
    },
    {
      company: 'Vembu Technologies',
      role: 'Customer Acquisition',
      period: 'Aug 2020 - Jun 2021',
      highlights: [
        'Drove customer acquisition for Vembu’s BDR360 (now BDRShield), a hybrid backup and disaster recovery solution.',
        'Managed 80–100 cold calls daily to SMB and enterprise prospects, positioning solutions across backup, disaster recovery, hybrid storage, and cyber-resilience use cases.',
        'Secured 40+ product demos with IT decision makers, achieving a 10% conversion rate from cold outreach.'
      ],
      color: '#84ff00'
    }
  ], []);


  return (
    <Box
      id="experience"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: 10,
        px: 2,
        backgroundColor: '#000000'
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
            color: '#fc3903',
          }}
        >
          Experience
        </Typography>
        <Box
          sx={{
            width: '500px',
            height: '4px',
            backgroundColor: '#fc3903',
            margin: '0 auto',
            borderRadius: '2px'
          }}
        />
      </Box>

        

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {experience.map((exp, index) => (
              <Card
                key={index}
                sx={{
                  border: `4px solid ${exp.color}`,
                  boxShadow: 5,
                  '&:hover': {
                    boxShadow: 10,
                    transform: 'scale(1.02)',
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