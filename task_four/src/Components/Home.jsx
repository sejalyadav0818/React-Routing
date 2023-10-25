import React from 'react'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <><h1>Home</h1>
    <h2>GO to <Link to="/services/:id">Service</Link></h2>
    </>
    
   
  )
}

export default Home