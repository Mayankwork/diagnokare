import React from 'react'

import { useNavigate } from 'react-router';
const HomePage = () => {
    let navigate = useNavigate();
  return (
    <div className='d-flex justify-content-center align-items-center mt-5'>
        
        <button className='btn btn-primary' onClick={()=> navigate('/about')}> About Us</button>
        <button className='btn btn-primary ms-4' onClick={()=> navigate('/contact')}  > Contact Us</button>
    </div>
  )
}

export default HomePage