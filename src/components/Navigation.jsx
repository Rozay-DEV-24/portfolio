import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EncryptButton from './Animations/EncryptButton/EncryptButton'

// SVG Logo Component
const Logo = () => (
  <NavLink to="/home" style={{ textDecoration: 'none' }}>
    <img
      src="/images/logo2.svg"
      alt="Logo"
      style={{
        width: '180px',
        height: '90px',
        marginRight: '12px',
        cursor: 'pointer'
      }}
    />
  </NavLink>
);

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const menuItems = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'];

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#000000', boxShadow: 2 }}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1}}>
            <Logo />
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {menuItems.map((item) => (
              <NavLink
                key={item}
                to={`/${item}`}
                style={{ textDecoration: 'none' }}
              >
                {({ isActive }) => (
                  <EncryptButton
                    sx={{
                      textTransform: 'capitalize',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: isActive ? '#ffffff' : '#bdd6ff',
                      borderBottom: isActive ? '2px solid #ffffff' : 'none',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                      transition: 'all 0.3s'
                    }}
                  >
                    {item}
                  </EncryptButton>
                )}
              </NavLink>
            ))}
          </Box>

          <IconButton
            sx={{ display: { xs: 'block', md: 'none' }, color: '#ffffff' }}
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
            <NavLink
              key={item}
              to={`/${item}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={() => setIsDrawerOpen(false)}
            >
              {({ isActive }) => (
                <ListItem
                  button
                  sx={{
                    backgroundColor: isActive ? '#f0f0f0' : 'transparent',
                    borderLeft: isActive ? '4px solid #000' : 'none'
                  }}
                >
                  <ListItemText
                    primary={item}
                    sx={{
                      textTransform: 'capitalize',
                      fontWeight: isActive ? 'bold' : 'normal'
                    }}
                  />
                </ListItem>
              )}
            </NavLink>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navigation;