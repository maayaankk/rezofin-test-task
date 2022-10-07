import React, {useState, useEffect} from 'react'
import { Button, Input, Typography } from '@mui/material';
import axios from '../axios';
import Card from '../components/Card'
import TextField from '@mui/material/TextField';

function DataFetching() {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});

    // const [userId, setUserId] = useState({});
    const [id, setID] = useState()

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
            const response = await axios.get(url,
                // {
                // headers: {
                //     'Authorization': 'eyJraWQiOiJENEVrRXFrVERSZFBxQ1p1bzExZVpwYk51NkJPb09KdEdpeXZuZmlVcURrPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIzYzk0NzE4Ny02YmI5LTQyNjQtODllNi1hMDUyYWM5YjU3NjEiLCJjb2duaXRvOmdyb3VwcyI6WyJBRE1JTiJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX0lpa2k4bzdONiIsInZlcnNpb24iOjIsImNsaWVudF9pZCI6IjEzbnNtazhzNDRqNWx1NTZ0YWVxbWk2c2JtIiwib3JpZ2luX2p0aSI6Ijg2MWQxMDVkLTc5YjQtNDE5YS1hMjQ4LTIwYTA1MjA0ZGEzNiIsImV2ZW50X2lkIjoiZDhiMTdhZGEtMzcxYS00NDAzLTg1YWQtOWNiOWY1NjMzMTM0IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiBwaG9uZSBvcGVuaWQgcHJvZmlsZSBlbWFpbCIsImF1dGhfdGltZSI6MTY2NTE0MTgwNCwiZXhwIjoxNjY1MTQ1NDA0LCJpYXQiOjE2NjUxNDE4MDQsImp0aSI6IjRkNzUxOTJiLTM2MjQtNGEzMi1hNDU0LTg5MTM5ZmZhZDdjMyIsInVzZXJuYW1lIjoiM2M5NDcxODctNmJiOS00MjY0LTg5ZTYtYTA1MmFjOWI1NzYxIn0.IaVL_qfRmYL_TwwRlWi4z6AqCFeFVZWpDQsEG22ikwN-heLXr7kgJ8qKA7ckH7lIN08wAm5_1OjraUC9B-Q2rTM1X5U2YgAzEt7vb09MqZ_taBUHUjAae830alSY5l4954tB-vntnRLRouPBOanli1rdpxISJdfQHwxF83KHUQZJ4AHhYzH3O1dT2aKmGHdVQDGEuXy_AtJsPuVZBC5_5RJe98cUYYKe2YsSwjmtU2I_B0Hv6rvEBzFKHGWbA98z1vbZory3cXAGV7NU0tXt0FXCSRI-8mPCAQ0hSzJSY3mmpNnnFkIRVo7rnQraJGBXuLV7musoI_9Ngk26JqQwmw'
                // }
                // }
            )
            setPosts(response.data.data.dataReceived);
        }
        getAllUserData();
    }, [])

  return (
    <>
    {/* <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}> */}
    <TextField id="outlined-basic" variant="outlined" type="text" value={id} onChange={e => setID(e.target.value)}/>
    <Typography>{post.email}</Typography>
    {/* </div> */}
    {/* <div style={{display: "flex" ,justifyContent: "space-between", alignItems: "center"}}> */}
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
     {/* </div> */}
    </>
  )
}

export default DataFetching