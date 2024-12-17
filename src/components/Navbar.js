import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
function Navbar() {
  
  return (
    <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='Create'>Create</Link></li>
            <li><Link to='Update/:id'>Update</Link></li>
            <li><Link to='Add'>Add</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar