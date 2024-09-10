import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
const Home = () => {
    const navigate=useNavigate();
  return (
    <div>
        <Link to='/signin'>Signin</Link>
        <Link to='/signup'>Signup</Link>
      <h1>Home</h1>
    </div>
  )
}

export default Home
