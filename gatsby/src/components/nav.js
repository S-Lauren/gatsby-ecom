import { Link, navigate } from 'gatsby';
import React from 'react'; 
// import {Link} from 'gatsby'; 
 
const goToHomePage = () => {
  setTimeout(() => {
    navigate('/home')
  }, 2000)
}


const Nav = () => {
  return (
    <>
      <ul>
        <li>
          <Link to='/news'>Hot now </Link>
        </li>
        <li>  
          <Link to='/menu'> Kebab Menu </Link>
        </li>
        <li>
          <Link to='/logo'>Logo </Link>
        </li>
        <li>  
          <Link to='/cookers'> Cookers </Link>
        </li>
        <li>  
          <Link to='/order'> Order a Kebab </Link>
        </li>
      </ul>
    </>
  )

}
export default Nav; 