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
import ParallaxBackground from './components/ParallaxBackground';
import useScrollTracking from './hooks/useScrollTracking';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6B6B',
    },
    secondary: {
      main: '#4ECDC4',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

function App() {
  const { scrollY, activeSection, setActiveSection } = useScrollTracking();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'white', overflowX: 'hidden' }}>
        <ParallaxBackground scrollY={scrollY} />
        <Navigation 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
        />
        <Hero scrollY={scrollY} setActiveSection={setActiveSection} />
        <About scrollY={scrollY} />
        <Experience scrollY={scrollY} />
        <Projects scrollY={scrollY} />
        <Skills scrollY={scrollY} />
        <Contact scrollY={scrollY} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;