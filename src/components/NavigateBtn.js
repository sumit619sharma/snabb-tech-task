import React from 'react'
import { useNavigate } from 'react-router-dom'

// hadling navigation between different routes

const NavigateBtn = ({path}) => {
  const navigate = useNavigate();
    const handleNavigate = () => {
    navigate(path);
    }
  
    return (
    <div>
    <button onClick={handleNavigate} className="btn btn-warning"> {path==='/' ? 'adduser' : 'User-List' } </button>
    </div>
  )
}

export default NavigateBtn
