import React from 'react';
import KebabIcon from "../assets/icons/kebab_icon.inline.svg";
import styled  from 'styled-components';
const IconContainer = styled.div`
  width: 100px; 
  height: 100px;
  overflow: hidden; 

`
;
const Logo = () => {
  return (
    <IconContainer>
      <KebabIcon/>
    </IconContainer>
  );
};

export default Logo;