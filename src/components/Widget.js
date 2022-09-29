import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';


function Widget() {
        
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

      return (
        <Box sx={{ flexGrow: 1, mt: 2, height: 50 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item>Widget-1</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>Widget-2</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>Widget-3</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>Widget-4</Item>
            </Grid>
          </Grid>
        </Box>
      );
    }
export default Widget