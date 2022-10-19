import React, {useState, useEffect} from 'react'
import { Button, Input, Typography } from '@mui/material';
import axios from '../axios';
import Card from '../components/Card'
import TextField from '@mui/material/TextField';

// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import {CognitoJwtVerifier} from 'aws-jwt-verify';


// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function DataFetching(props) {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});
    const [email, setToken] = useState('');

    // const [userId, setUserId] = useState({});
    const [id, setID] = useState()

        var id_token_str = window.location.hash.split("&access_token=")[0]
        var authorization_str = id_token_str.replace("#id_token=", "");
    
        console.log(authorization_str);

    const verifier = CognitoJwtVerifier.create({
        userPoolId: "ap-south-1_24fntNvCV",
        tokenUse: "id",
        clientId: "4vs4hk0vdln7jum20sfab1gcea"
    });

    try {
        const payload =   verifier.verify(authorization_str)
            .then(res => {
                console.log("Token.valid. Payload: ", payload);
                console.log(res)
                console.log(res.email)
            })
            .catch(err => {
                console.log(err)
            })
    } catch (error) {
        // console.log(error);
        console.log("Token not valid. Error: ", error)
    }

    useEffect(() => {
        const getAllUserByID = async () => {
            const url = `get-user-data-byId/${id}`

            await axios.get(url)

            await axios.get(url
                , {
                headers: {
                    'Authorization': authorization_str
                }
            }
            )

                .then(res => {
                    console.log(res);
                    setPost(res.data.data);
                })
                .catch(err => {
                    console.log(err)
                })
            
        }
        // getAllUserData();
        getAllUserByID();
    }, [id])

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

    useEffect(() => {
        const getAllUserData = async () => {
            const url = '/get-user';
            await axios.get(url
                , {
                    headers: {
                        'Authorization': authorization_str,
                    }
                }
                )
                    .then(res => {
                        console.log(res)
                        console.log(props.token)
                        setPosts(res.data.data.dataReceived);
                    })
                    .catch(err => {
                        console.log(err)
                    })

        }
        getAllUserData();
    }, [])

  return (
    <>
    <div style={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "space-between"}}>
    <TextField label={'Search Id...'}  id="outlined-basic" variant="outlined" type="text" value={id} onChange={e => setID(e.target.value)}/>
    <Typography>{post.email}</Typography>
    </div>
    <div style={{display: "flex" ,flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", marginBottom: 20}}>
        {console.log(posts)}
                {
                    posts.map(res => (
                        <>
                            <Card 
                            key={res.ID}
                            id={res.ID}
                            email={res.email}
                            />
                           {/* <button onClick={deleteAllUserByID}>delete</button> */}
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
         </div>
        {/* <Input outlined /> */}
            {/* {console.log(post)} */}
        
        {/* </div> */}
     {/* </div> */}
    </>
  )
}

export default DataFetching
