import React from 'react';
import { Container, Typography, Box, Card, CardContent, Grid, Chip } from '@mui/material';
import TiltCard from './Animations/TiltCard/TiltCard';

const Certifications = ({ scrollY }) => {
  const certifications = [
    {
      title: 'Oracle OCI Gen AI Professional',
      issuer: 'Oracle University',
      date: 'August 29, 2025',
      validUntil: 'August 29, 2027',
      certificateId: '102470030OCI25GAIOCP',
      color: '#FF6B35',
      image: '/certificates/Oracle_GenAI.png'
    },
    {
      title: 'Python Full Stack Developer',
      issuer: 'Besant Technologies',
      date: 'January 10, 2022',
      certificateId: 'BDZ48925',
      color: '#FF8B35',
      image: '/certificates/PythonFullStack.png'
    },
    {
      title: 'HackerRank: Python (Basic)',
      issuer: 'HackerRank',
      date: 'September 23, 2025',
      certificateId: 'FB24A9FB2EA3',
      color: '#00EA64',
      image: '/certificates/HackerRank_python_basic.png'
    },
    {
      title: 'HackerRank: SQL (Basic)',
      issuer: 'HackerRank',
      date: 'September 22, 2025',
      certificateId: '9333853810E5',
      color: '#00EA64',
      image: '/certificates/HackerRank_sql_basic.png'
    },
    {
      title: 'JavaScript 2025',
      issuer: 'Udemy',
      date: 'September 28, 2025',
      color: '#d604b7',
      image: '/certificates/Udemy_JS.png'
    },
    {
      title: 'OOPs using Python',
      issuer: 'Udemy',
      date: 'September 6, 2025',
      color: '#d604b7',
      image: '/certificates/Udemy_Python_OOPs.png'
    },
    {
      title: 'Intro to Machine Learning',
      issuer: 'Kaggle',
      date: 'June 6, 2025',
      instructor: 'Dan Becker',
      color: '#20BEFF',
      image: '/certificates/Kaggle_IntroToML.png'
    },
    {
      title: 'Pandas',
      issuer: 'Kaggle',
      date: 'June 8, 2025',
      instructor: 'Aleksey Bilogur',
      color: '#20BEFF',
      image: '/certificates/Kaggle_Pandas.png'
    },
    {
      title: 'Intro to Deep Learning',
      issuer: 'Kaggle',
      date: 'June 9, 2025',
      instructor: 'Ryan Holbrook',
      color: '#20BEFF',
      image: '/certificates/Kaggle_IntroToDL.png'
    }
  ];

  return (
    <Box
      id="certifications"
      sx={{
        minHeight: '100vh',
        py: 10,
        px: 2,
        backgroundColor: '#1F2937'
      }}
    >
      <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '3rem', md: '5rem', xl: '8rem' },
              fontWeight: 600,
              mb: 2,
              color: '#ffffff',
              transform: `translateY(${Math.max(-100, (scrollY - 6000) * -0.2)}px)`,
              opacity: Math.min(1, Math.max(0, (scrollY - 5900) / 300))
            }}
          >
            Certifications
          </Typography>
          <Box
            sx={{
              width: '800px',
              height: '4px',
              backgroundColor: '#ffffff',
              margin: '0 auto',
              borderRadius: '2px',
              transform: `translateY(${Math.max(-100, (scrollY - 6000) * -0.2)}px)`,
              opacity: Math.min(1, Math.max(0, (scrollY - 5900) / 300))
            }}
          />
        </Box>

        <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
          {certifications.map((cert, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <TiltCard maxTilt={20}>
                <Card
                  sx={{
                    height: '100%',
                    width: '350px',
                    border: `4px solid ${cert.color}`,
                    boxShadow: 5,
                    transform: `translateY(${Math.max(-200, (scrollY - 6200 - index * 100) * -0.15)}px)`,
                    opacity: Math.min(1, Math.max(0, (scrollY - 6100 - index * 50) / 300)),
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Certificate Image */}
                  <Box
                    sx={{
                      height: 200,
                      position: 'relative',
                      borderBottom: `2px solid ${cert.color}`,
                      overflow: 'hidden'
                    }}
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        objectPosition: 'center'
                      }}
                    />
                  </Box>

                  <CardContent 
                    sx={{ 
                      p: 3, 
                      height: 'calc(100% - 200px)', 
                      display: 'flex', 
                      flexDirection: 'column',
                      width: '350px',
                      margin: '0 auto'
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 'bold',
                        color: '#1F2937',
                        mb: 2,
                        lineHeight: 1.3,
                        fontSize: '1.1rem',
                        wordWrap: 'break-word',
                        whiteSpace: 'normal'
                      }}
                    >
                      {cert.title}
                    </Typography>

                    <Box sx={{ mt: 'auto' }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#6B7280',
                          fontWeight: 'bold',
                          mb: 1
                        }}
                      >
                        {cert.date}
                      </Typography>

                      {cert.validUntil && (
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#059669',
                            fontWeight: 'bold',
                            mb: 1,
                            fontSize: '0.85rem'
                          }}
                        >
                          Valid until: {cert.validUntil}
                        </Typography>
                      )}

                      {cert.duration && (
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#6B7280',
                            fontWeight: 'bold',
                            mb: 1,
                            fontSize: '0.85rem'
                          }}
                        >
                          Duration: {cert.duration}
                        </Typography>
                      )}

                      {cert.instructor && (
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#6B7280',
                            fontStyle: 'italic',
                            mb: 1,
                            fontSize: '0.85rem'
                          }}
                        >
                          Instructor: {cert.instructor}
                        </Typography>
                      )}

                      {cert.certificateId && (
                        <Chip
                          label={`ID: ${cert.certificateId}`}
                          size="small"
                          sx={{
                            backgroundColor: '#000000',
                            color: '#ffffff',
                            fontFamily: 'monospace',
                            fontWeight: 'bold',
                            fontSize: '0.7rem',
                            mt: 1
                          }}
                        />
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </TiltCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Certifications;