// External modules
import React from 'react';
import styled from 'styled-components';

//Internal modules

import Typing from './Typing';
const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

const Home = (props) => {
    return (
        <HomeContainer>
            <Typing />
        </HomeContainer>
    );
};

export default Home;
