// External modules
import React from 'react';
import styled from 'styled-components';

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

const NavLinks = (props) => {
    return(
        <NavLinkContainer>
            <NavLink href='/news'>News</NavLink>
            <NavLink href='/leaderboard'>Leaderboard</NavLink>
            <NavLink href='/profile'>Profile</NavLink>
      </NavLinkContainer>
    );
}

export default NavLinks;