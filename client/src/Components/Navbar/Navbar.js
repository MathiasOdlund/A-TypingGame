// External modules
import React from 'react';
import styled from 'styled-components';

// Internal modules
import Hamburger from './Hamburger';

const NavContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 96px;

  @media (max-width: 768px) {
    justify-content: center;
  }
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
    color: #D0CCD0;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const NavLinkContainer = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #fff;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #D0CCD0;
  }
`;

// Going to be fixing this soon
const Navbar = (props) => {
  return (
    <NavContainer>
      <LogoContainer>
        <Logo href='/'>TypeChamp</Logo>
      </LogoContainer>
      <NavLinkContainer>
        <NavLink href='/news'>News</NavLink>
        <NavLink href='/leaderboard'>Leaderboard</NavLink>
        <NavLink href='/profile'>Profile</NavLink>
        </NavLinkContainer>
        <Hamburger />
    </NavContainer>
  );
};

export default Navbar;
