import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EncryptButton from './Animations/EncryptButton/EncryptButton'

// SVG Logo Component
const Logo = () => (
  <img
    src="/images/logo2.svg"
    alt="Logo"
    style={{ 
      width: '180px', 
      height: '90px', 
      marginRight: '12px' 
    }}
  />
);

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setIsDrawerOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const menuItems = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'];
  // const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF', '#FF8B94', '#B4A7D6', '#9C27B0'];

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#000000', boxShadow: 2 }}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Logo />
            {/* <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
              Rohit Surya AVB
            </Typography> */}
          </Box>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {menuItems.map((item, index) => (
              <EncryptButton
                key={item}
                onClick={() => scrollToSection(item)}
                sx={{
                  textTransform: 'capitalize',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#bdd6ff',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.3s'
                }}
              >
                {item}
              </EncryptButton>
            ))}
          </Box>

          <IconButton
            sx={{ display: { xs: 'block', md: 'none' } }}
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <List sx={{ width: 250 }}>
          {menuItems.map((item) => (
            <ListItem button key={item} onClick={() => scrollToSection(item)}>
              <ListItemText primary={item} sx={{ textTransform: 'capitalize' }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navigation;