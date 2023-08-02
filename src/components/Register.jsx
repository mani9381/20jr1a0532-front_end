import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    const [cname,setCname] = useState("")
    const [oname,setOname] = useState("")
    const [roolno,setRollno]=useState("")
    const [omail,setOmail] = useState("")
    const [acode,setAcode] = useState("")
    const [loading,setLoading] = useState(false)
    const Reg = ()=>{
        setLoading(true)
        axios.post("http://localhost:5000/trian/register",{companyName:cname,ownerName:oname,rollNo:roolno,ownerEmail:omail,accessCode:acode} )
        .then(res=>{setLoading(false);console.log(res.data)}).catch(err=>{setLoading(false);console.log(err)})
        

    }
  return (
    <>
    <div className="main">
        <div className="container">
            <h1>Register</h1>
            <TextField id='outlined-basi' variant='outlined' label="Company Name" onChange={e=>setCname(e.target.value)}/>
            <TextField id='outlined-bas' variant='outlined' label="ownerName" onChange={e=>setOname(e.target.value)}/>
            <TextField id='outlined-ba' variant='outlined' label="rollNo" onChange={e=>setRollno(e.target.value)} />
            <TextField id='outlined-b' variant='outlined' label="ownerEmail" onChange={e=>setOmail(e.target.value)}/>
            <TextField id='outlined-' variant='outlined' type='password' label="accessCode" onChange={e=>setAcode(e.target.value)} />
            <Button variant='outlined' onClick={Reg}>{loading?"Registering...":"Register"}</Button>
            <div><p>Alredy have acoount: <Link to="/login">Login</Link></p></div>
        </div>
    </div>
    
    
    </>
  )
}
