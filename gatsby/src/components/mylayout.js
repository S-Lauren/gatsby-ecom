import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Footer from './footer';
import Nav from './nav';

const MyLayout = ({children}) => {

  return (
    <>
    <Typography/>
    <GlobalStyles/>
      <Nav/>
        <h1>{children}</h1>
      <Footer/>
    </>
  );
};

export default MyLayout;