import React from 'react'
import {useNavigate , Link} from 'react-router-dom'

const Page404 = () => {
  let nevigate = useNavigate()
  return (
    <div className='nodata'>
      <>
      <h4>404 page not found</h4>
      <button onClick={() => nevigate(-1)}>Go to Back</button>
      </>
    </div>
  )
}

export default Page404
