import { Link } from "gatsby";
import React from "react"; 

const Home = () => {
  return(
    <>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to='/'>Retour at home </Link>
    </>
  )
}
export default Home; 