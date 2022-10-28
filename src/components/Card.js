import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import axios from '../axios';
import { Stack } from '@mui/system';

function Cards(props) {
  const [id, setID] = useState()
  const [post, setPost] = useState([]);

  var id_token_str = window.location.hash.split("&access_token=")[0]
  var authorization_str = id_token_str.replace("#id_token=", "");

  const deleteAllUserByID = async () => {
    const url = `/delete-user-data-byId/${id}`

    await axios.delete(url)

    await axios.delete(url 
        , {
        headers: {
            'Authorization': authorization_str
        }
    })

        .then(res => {
            console.log(res);
            setPost(res.data.data);
        })
        .catch(err => {
            console.log(err)
        })
}


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

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

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
<Stack p={4}>
<Grid container my={2} p={2}>
  {/* {Array.from(Array(2)).map((_, index) => ( */}
  <Stack p={2}>
    <Grid item xs={12}>
      <Paper elevation={3} >
      <Box >
      {card}
      <Button>Delete</Button>
      </Box>
      </Paper>
    </Grid>
  </Stack>
  <Stack p={2}>
  <Grid item xs={12}>
      <Paper elevation={3}>
      <Box >
      {card}
      <Button onClick={deleteAllUserByID}>Delete</Button>
      </Box>
      </Paper>
    </Grid>
  </Stack>
</Grid>  
</Stack>

  )
}

export default Cards