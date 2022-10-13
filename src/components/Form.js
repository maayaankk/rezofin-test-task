import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from '../axios';

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
    <form style={{display: 'flex', flexDirection: "column"}} onSubmit={this.submitData  } >
      {/* <TextField type='text' label={'id'} id="margin-none"  value={ID} />
      <TextField type='text' label={'name'} id="margin-dense" margin="dense"  value={name}/>
      <TextField type='text' label={'password'} id="margin-normal" margin="normal"  value={password} />
      <Button type='submit' variant="contained">Submit</Button> */}
       <TextField 
        label='id'
        type='text' 
        name='ID'   
        value={ID} 
        onChange={this.handleChange} 
      />
      <TextField 
        label='email'
        type='text'   
        name='email'  
        value={email} 
        onChange={this.handleChange}
      />
      <TextField 
        label='password'
        type='password'    
        name='password' 
        value={password} 
        onChange={this.handleChange} 
      />
      <Button type='submit' variant="contained">Submit</Button>
    </form>
    </Box>
    </div>
    )
  }
}

export default Form
