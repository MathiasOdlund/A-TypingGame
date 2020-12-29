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

  h1 {
    color: white;
  }
`;
const NavLinkContainer = styled.div`
  position: absolute;
  right: 5%;
  top: 4%;
  transform:translateY(-50%);
  display: flex;
  justify-content: space-around;
  list-style: none;
  width: 20%;
`;

const NavLink = styled.a`
  color: #fff;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

//Going to be fixing this soon
const Navbar = (props) => {
  return (
    <NavContainer>
      <Logo>
        <h1>TypeChamp</h1>
      </Logo>
      <NavLinkContainer>
        <NavLink href='' >Link1</NavLink>
        <NavLink>Link2</NavLink>
        <NavLink>Link3</NavLink>
      </NavLinkContainer>
    </NavContainer>
  );
};

export default Navbar;
