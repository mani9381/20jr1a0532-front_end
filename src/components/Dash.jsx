import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dash() {
    const navigator = useNavigate()
    const logout = ()=>{
        localStorage.clear();
        navigator('/login')

    }
  return (
    <>
    <div className="main">
        <div className="container">
            <h1>Page is developing...</h1>
            <Button variant='otlined' onClick={logout}>Logout</Button>
        </div>
    </div>
    
    
    
    </>
  )
}
