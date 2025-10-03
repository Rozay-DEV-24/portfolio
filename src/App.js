import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Certifications from './components/Certifications';
import ParallaxBackground from './components/ParallaxBackground';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fc4242',
    },
    secondary: {
      main: '#4ECDC4',
    },
    background: {
      default: '#046fcc',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'white', overflowX: 'hidden' }}>
        <ParallaxBackground />
        <Navigation />
        <Hero setActiveSection={() => {}} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;