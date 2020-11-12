import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Footer from './footer';
import Nav from './nav';
import styled from "styled-components";
import stripes from '../assets/icons/pattern2.svg'; 


const SiteBorderStyles = styled.div`
  max-width: 1000px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 12rem);
  background: url(${stripes});
  background-size: 500px;
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  border: 5px solid white;
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const ContentStyles = styled.div`
  background: white;
  padding: 2rem;
`;
const MyLayout = ({children}) => {

  return (
    <>
    <Typography/>
    <GlobalStyles/>
      <SiteBorderStyles>
        <ContentStyles>
          <Nav/>
            <h1>{children}</h1>
          <Footer/>
        </ContentStyles>
      </SiteBorderStyles>
    </>
  );
};

export default MyLayout;