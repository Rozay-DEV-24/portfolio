import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1F2937',
        color: 'white',
        py: 5,
        textAlign: 'center'
      }}
    >
      <Typography variant="body1" sx={{ fontFamily: 'monospace', fontWeight: 'bold' }}>
        © 2025 Rohit Surya AVB. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;