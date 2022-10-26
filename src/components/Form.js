import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormGroup } from '@mui/material';
import axios from '../axios';
import { Stack } from '@mui/system';

class Form extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      ID: '',
      email:'',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitData = e => {
    e.preventDefault()
    console.log(this.state)
    const url = '/create-user-data'

    axios.post(url, this.state)

    axios.post(url, this.state
  //     , {
  //     headers: {
  //         'Authorization': props.token
  //     }
  // })
    )
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render(){
    const {ID, email, password} = this.state
    return(
      <div>
      <Box
      sx={{
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        '& .MuiTextField-root': { width: '25ch' },
      }}
    >
    <form style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' ,padding: 10}} onSubmit={this.submitData  } >
      {/* <TextField type='text' label={'id'} id="margin-none"  value={ID} />
      <TextField type='text' label={'name'} id="margin-dense" margin="dense"  value={name}/>
      <TextField type='text' label={'password'} id="margin-normal" margin="normal"  value={password} />
      <Button type='submit' variant="contained">Submit</Button> */}
      <Stack marginBottom={2}>
      <TextField 
        label='id'
        type='text' 
        name='ID'   
        value={ID} 
        onChange={this.handleChange} 
      />
      </Stack>
      <Stack marginBottom={2}>
      <TextField 
        label='email'
        type='text'   
        name='email'  
        value={email} 
        onChange={this.handleChange}
      />
        </Stack>
        <Stack marginBottom={2}>
        <TextField 
        label='Password'
        type='password'    
        name='password' 
         helperText='Do not share your password with anyone'
        value={password} 
        onChange={this.handleChange} 
      />
        </Stack>
      <Button type='submit' variant="contained" size='small'>Submit</Button>
    </form>
    </Box>
    </div>
    )
  }
}

export default Form
