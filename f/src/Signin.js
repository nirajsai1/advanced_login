import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
const Signin = () => {
  const [e,setE]=useState('');
  const [p,setP]=useState('');
  const email = (event) =>
  {
    setE(event.target.value);
  }
  const password = (event) =>
  {
    setE(event.target.value);
  }
  const submit = async() =>
  {
    try{
      const res=await axios.post('/api/auth/signin',{email:e,password:p});
    }
    catch(error)
    {
      console.log(error.message);
    }
  }
  return (
    <div>
        <Link to='/signup'>Signup</Link>
        <Link to='/'>Home</Link>
      <input type='text' placeholder='enter email' onChange={email}></input>
      <input type='text' placeholder='enter password' onChange={password}></input>
      <button onClick={submit}></button>
    </div>
  )
}

export default Signin
