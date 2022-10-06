import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

function Cards(props) {

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {props.id} 
      </Typography>
      {/* <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography> */}
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {props.email}
      </Typography>
      <Typography variant="body2">
        Fetching data from DynamoDb
        <br />
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Fetch Data</Button>
    </CardActions>
  </React.Fragment>
);

  return (
    <>
    <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
            <Box sx={{ minWidth: 270, m: 5, mt: 3}}>
                <Card variant="outlined">{card}</Card>
            </Box>
        </Grid>
    </Grid>
    </>
  )
}

export default Cards