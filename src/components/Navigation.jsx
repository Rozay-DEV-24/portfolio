import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setIsDrawerOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
  const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF', '#FF8B94', '#B4A7D6'];

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'white', boxShadow: 2 }}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#FF6B6B' }}>
            Rohit Surya AVB
          </Typography>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {menuItems.map((item, index) => (
              <Button
                key={item}
                onClick={() => scrollToSection(item)}
                sx={{
                  textTransform: 'capitalize',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#374151',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.3s'
                }}
              >
                {item}
              </Button>
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