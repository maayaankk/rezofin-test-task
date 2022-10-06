import React, {useState, useEffect} from 'react'
import { Button, Input, Typography } from '@mui/material';
import axios from '../axios';
import Card from '../components/Card'
import TextField from '@mui/material/TextField';

function DataFetching() {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});

    // const [userId, setUserId] = useState({});
    const [id, setID] = useState(702179845)

    useEffect(() => {
        const getAllUserByID = async () => {
            const url = `get-user-data-byId/${id}`
            const response = await axios.get(url);
            setPost(response.data.data);
        }
        // getAllUserData();
        getAllUserByID();
    }, [id])

    useEffect(() => {
        const getAllUserData = async () => {
            const url = '/get-user';
            const response = await axios.get(url)
            setPosts(response.data.data.dataReceived);
        }
        getAllUserData();
    }, [])

  return (
    <>
    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
    <TextField id="outlined-basic" variant="outlined" type="text" value={id} onChange={e => setID(e.target.value)}/>
    <Typography>{post.email}</Typography>
    </div>
    <div style={{display: "flex" ,justifyContent: "space-between", alignItems: "center"}}>
        {/* {console.log(posts)} */}
                {
                    posts.map(res => (
                        <>
                            <Card 
                            id={res.ID}
                            email={res.email}
                            />
                        </>
                            // {/* <div>
                            //     <h4>ID:{res.ID}</h4>
                            // </div>
                            // <div>
                            //     <h4>Email:{res.email}</h4>
                            // </div>
                            // <div>
                            //     <h4>Password:{res.password}</h4>
                            // </div> */}
                        
                    ))
                }
        {/* <div>/ */}
        {/* <Input outlined /> */}
            {/* {console.log(post)} */}
        
        {/* </div> */}
     </div>
    </>
  )
}

export default DataFetching