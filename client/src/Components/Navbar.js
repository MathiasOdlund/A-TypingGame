// External modules
import React from 'react';
import styled from 'styled-components';
import UserImg from '../Assets/Img/account.svg';
const NavContainer = styled.div`
  width: 100%;
  height: 5%;
`;
const NavLinks = styled.div`
  position: absolute;
  right: 5%;
  display: flex;
  width: 16%;
  height: 6%;

  justify-content: space-around;
  li {
    margin-top: 15px;
    list-style: none;

    color: whitesmoke;
    a {
      font-family: 'Poppins', sans-serif;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
const AccountImg = styled.img`
  width: 12%;
`;

const Navbar = props => {
  return (
    <NavContainer>
      <NavLinks>
        <li>
          <a>Link1</a>
        </li>
        <li>
          <a>Link2</a>
        </li>
        <li>
          <a>Link3</a>
        </li>
        <AccountImg src={UserImg} />
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;
