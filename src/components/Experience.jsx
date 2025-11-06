import React, { useMemo } from 'react';
import { Container, Typography, Box, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Experience = () => {
  const experience = useMemo(() => [
    {
      company: 'Wells Fargo - New York',
      role: 'Java Full Stack Developer',
      period: 'Jan 2025 – Present',
      highlights: [
      "Developed back-end systems (Spring, Hibernate) improving data management efficiency by 30%",
      "Implemented Virtual Threads improving application performance by 30%",
      "Used Record Patterns & Pattern Matching to reduce boilerplate code and enhance readability",
      "Designed RESTful/GraphQL APIs (payments, refunds) reducing API response time by 35%",
      "Used Scoped Values for efficient data sharing in concurrent threads",
      "Refactored Spring Boot Microservices with Java 21 features for better efficiency",
      "Migrated code to String Templates API for safer dynamic string generation",
      "Created Spring Batch solutions handling 1M+ records daily",
      "Leveraged Sequenced Collections API to streamline ordered data handling",
      "Implemented multi-threading, increasing resource utilization by 20%",
      "Managed MongoDB data solutions ensuring 99.9% availability"
      ],
      color: '#84ff00'
    },
    {
      company: 'HCL India (GE Healthcare)',
      role: 'Software Engineer',
      period: 'May 2022 – Aug 2024',
      highlights: [
        "Developed high-performance web apps (Core Java, Spring Boot) improving responsiveness by 30%",
        "Used Lambda expressions, cutting processing time by 20%",
        "Designed scalable RESTful APIs, increasing system interoperability by 25%",
        "Applied IoC/DI patterns, reducing debugging time by 40%",
        "Deployed on AWS (EC2, S3, RDS, etc.), reducing infrastructure costs by 15%",
        "Implemented AWS autoscaling, reducing downtime incidents by 50%",
        "Managed Spring transactions, resulting in zero data loss incidents",
        "Developed Spring Batch jobs, increasing workflow efficiency by 35%"
      ],
      color: '#2c87db'
    },
    {
      company: 'Larsen & Turbo Technology Services',
      role: 'Software Engineer',
      period: 'Sep 2018 – Apr 2022',
      highlights: [
        "Developed web applications using the Struts framework and MVC pattern",
        "Implemented JMS for reliable messaging between distributed systems",
        "Utilized Eclipse IDE for efficient coding, debugging, and development",
        "Created data access layers with Hibernate DAO for Oracle integration",
        "Implemented dynamic web content using Java Servlets and JSP tag libraries",
        "Designed and built scalable applications with EJB to optimize performance",
        "Employed JDBC for database connectivity and operations",
        "Managed version control using Git for collaborative development",
        "Conducted unit testing with Mockito to validate code functionality",
        "Implemented Log4j for effective logging and performance monitoring",
        "Collaborated using JIRA for project management and issue tracking",
        "Developed SQL and PL/SQL queries to boost data performance",
        "Integrated SOAP web services with WSDL for system communication"
      ],
      color: '#05e3c2'
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