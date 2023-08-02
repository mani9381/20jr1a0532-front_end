import React,{useState} from 'react'
import { Button, TextField } from '@mui/material'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
export default function Login() {
    const [omail,setOmail] = useState("")
    const [acode,setAcode] = useState("")
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const Log = ()=>{
        setLoading(true)
        axios.post("http://localhost:5000/train/auth",{ownerEmail:omail,accesCode:acode})
        .then(res=>{setLoading(false);console.log(res.data);res.data.status?navigate('/dashboard'):console.log("Wrong credintials")})
        .catch(err=>{setLoading(false);console.log(err)})
    }
  return (
    <>
    <div className="main">
        <div className="container">
            <h1>Login</h1>
            <TextField id='outlined-basic' variant='outlined' label="ownerEmail" onChange={e=>setOmail(e.target.value)} />
            <TextField id='outlined-basi' variant='outlined' type='password' label="accessCode" onChange={e=>setAcode(e.target.value)}/>
            <Button variant='outlined' onClick={Log}>{loading?"Logging in..":"Login"}</Button>
            <div><p>Don't have account: <Link to='/'>Register</Link></p></div>
        </div>
    </div>
    
    </>
  )
}
