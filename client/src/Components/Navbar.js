// External modules
import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 96px;
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.a`
  color: #fff;
  font-family: 'Varela Round', sans-serif;
  font-size: 32px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;

const NavLinkContainer = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled.a`
  color: #fff;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    cursor: pointer;
    color: #fff;
    text-decoration: underline;
  }
`;

// Going to be fixing this soon
const Navbar = (props) => {
  return (
    <NavContainer>
      <LogoContainer>
        <Logo>TypeChamp</Logo>
      </LogoContainer>
      <NavLinkContainer>
        <NavLink href='/news'>News</NavLink>
        <NavLink href='/leaderboard'>Leaderboard</NavLink>
        <NavLink href='/profile'>Profile</NavLink>
      </NavLinkContainer>
    </NavContainer>
  );
};

export default Navbar;
