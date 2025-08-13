import { hover } from '@testing-library/user-event/dist/hover'
import   {Link , NavLink} from 'react-router-dom'
 
const Header = () => {

  const navLinkStyle = ({isActive}) => {
    return {
      textDecoration: "none",
      color:isActive ? "#48D1CC" : "white",
      padding: isActive ? "0vw .9vw" : "",
      borderRadius : isActive ? "20px": "0px",
  }
  }
  return (
    <div className='header'>
    <NavLink style={navLinkStyle} to={'/app'}><h2>Home</h2></NavLink>
    <NavLink style={navLinkStyle} to={'/About'}><h2>About</h2></NavLink>
    <NavLink style={navLinkStyle} to={'/Contact'}><h2 >Contact</h2></NavLink>
    
    </div>
  )
}

export default Header
