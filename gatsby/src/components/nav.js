import { Link } from 'gatsby';
import React from 'react'; 
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
  background-color: black;
  width: 100%; 
  height: 15vh;  
  align-items: center; 
  display: flex; 
  justify-content: center; 
  
  .logo {
    transform: translateY(-10px);
  }
  ul {
    margin: 0;
    padding: 0;
    display: flex; 
    justify-content: center; 
    align-items: center; 
  }
  li {
    display: flex; 
    margin-left: 15px; 
    justify-content: center; 
    align-items: center; 
    font-family: 'Calibre';
    &:nth-child(1) {
      margin-left: 0; 
    }
  }
  a {
    color: white; 
    text-decoration: none; 
    &:hover {
      color: var(--red); 
    }
  }

`
;


const Nav = () => {
  return (
      <NavStyles>
        <ul>
          <li>
            <Link to='/news'>Hot now </Link>
          </li>
          <li>  
            <Link to='/menu'> Kebab Menu </Link>
          </li>
          <li className="logo" >
            <Link to='/logo'><Logo/> </Link>
          </li>
          <li>  
            <Link to='/cookers'> Cookers </Link>
          </li>
          <li>  
            <Link to='/order'> Order a Kebab </Link>
          </li>
        </ul>
      </NavStyles>
  )

}
export default Nav; 