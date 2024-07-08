import { Components, keyframes } from '@mui/material';

export const components: Components = {
  MuiButton: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        padding: '10px 20px',
        textTransform: 'none',
        borderRadius: 0,
        '&:hover': {
          backgroundColor: '#255C09',
          boxShadow: 'none',
        },
        '&:active': {
          color: 'rgba(0,0,0,0) !important',
          backgroundColor: 'linear-gradient(0deg, rgba(13, 19, 33, 0.30) 0%, rgba(13, 19, 33, 0.30) 100%), #255C09',
          boxShadow: 'none',
        },
     
      },
    },
  },
};

export default components;
