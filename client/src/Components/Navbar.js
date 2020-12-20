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
  top: 4%;
  transform:translateY(-50%);
  a{
  text-decoration: none;
  h1 {
  font-family: 'Fredoka One', cursive;
  color: white;
  }
  }
`;

const NavLinks = styled.div`
  position: absolute;
  right: 5%;
  top: 4%;
  transform:translateY(-50%);
  display: flex;
  justify-content: space-around;
  list-style: none;
  width: 18%;
  a{
  
  text-decoration: none;
   color: #fff;
   font-weight:600; 
    font-family: 'Poppins', sans-serif;
    &:hover {
      cursor: pointer;
    }
  }
`;
//Going to be fixing this soon
const Navbar = (props) => {
  return (
    <NavContainer>
      <Logo>
      <a href="/">
        <h1>TypeChamp</h1>
     </a>
      </Logo>
      <NavLinks>
        <a href="/news">News</a>
        <a href="/leaderboards">Leaderboards</a>
        <a href="/profile">Profile</a>
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;
