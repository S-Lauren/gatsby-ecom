import React from 'react';
import Footer from './footer';
import Nav from './nav';

const MyLayout = ({children}) => {

  return (
    <>
      <Nav/>
        <h1>{children}</h1>
      <Footer/>
    </>
  );
};

export default MyLayout;