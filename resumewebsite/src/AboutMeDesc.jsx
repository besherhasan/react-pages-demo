import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function MiddleDividers() {
  return (
    <Box sx={{position: 'relative' ,top: '-550px',left:'1300px', width: '100%', maxWidth: 760, bgcolor: 'background.paper' }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h1" component="div">
              About Me
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="" component="div">
             
            </Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="h4" font-size="20px">
        I am a Senior at Ajman University , pursuing Computer Engineering. I am interested in software engineering and front-end development.
         I've learnt HTML, CSS, JavaScript, and I'm current learning React & React Native. I'm on my journey to become an expert in the field of web and mobile development.
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
    
        <Stack direction="row" spacing={1} >
          
        
        </Stack>
      </Box>
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        
      </Box>

    </Box>
   
  );
}
