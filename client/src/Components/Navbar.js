// External modules
import React from 'react';
import styled from 'styled-components';
const NavContainer = styled.div`
  width: 100%;
  height: 5%;
`;

const Logo = styled.div`
    position: absolute;
    left: 5%;

    h1{
 color:white; 
  }
`
const NavLinks = styled.div`
  position: absolute;
  right: 5%;
  display: flex;
  justify-content: space-around;
  list-style: none;
  width: 20%;
    a{
     color: #fff;
     font-family: 'Poppins', sans-serif;
      &:hover {
        cursor: pointer;
      }
  }
`;

const Navbar = (props) => {
  return (
    <NavContainer>
    <Logo>
    <h1>TypeChamp</h1>
      </Logo>
      <NavLinks>
         <a>Link1</a>
          <a>Link2</a>
          <a>Link3</a>
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;
