import React from 'react'
import {Link , Outlet} from 'react-router-dom'

function Contact() {
  return (
    <div>
    <div className='insta-face'>
     <Link to={'insta'}><h4>Instagram</h4></Link>
     <Link to={'face'}><h4>Facebook</h4></Link>
     </div>
     <div className='insta-res'>
    <Outlet />
    </div>
     
    
    </div>
  
  )
}

export default Contact
