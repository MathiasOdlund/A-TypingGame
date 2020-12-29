// External modules
import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoWords = styled.a`
    color: #fff;
    font-family: 'Varela Round', sans-serif;
    font-size: 32px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color: #d0ccd0;
    }

    @media (max-width: 768px) {
        font-size: 28px;
    }
`;

const Logo = (props) => {
    return (
        <LogoContainer>
            <LogoWords href="/">TypeChamp</LogoWords>
        </LogoContainer>
    );
};

export default Logo;
