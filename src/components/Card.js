import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';

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
    {/* <CardActions>
      <Button size="small">Fetch Data</Button>
    </CardActions> */}
  </React.Fragment>
);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

  return (
    // <>
    // <Box sx={{width: '100%'}}>
    // <Grid container rowSpacing={2} columnSpacing={{xs:1, sm:2, md:3}}>
    //     <Grid item xs={6}>
    //         <Box sx={{ minWidth: 270, m: 5, mt: 3}}>
    //             <Item>{card}</Item>
    //         </Box>
    //     </Grid>
    // </Grid>
    // </Box>
    // </>
  <Grid container spacing={{ xs: 4, md: 4 }} columns={{ xs: 1, sm: 1, md: 1, mt: 1 }}>
  {/* {Array.from(Array(2)).map((_, index) => ( */}
    <Grid item xs={4} sm={4} md={4} mt={5}>
      <Item>
        {card}
        <Button>Delete</Button>
      </Item>
    </Grid>
  {/* ))} */}
</Grid>
  )
}

export default Cards