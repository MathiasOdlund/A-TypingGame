// External modules
import React from 'react';
import styled from 'styled-components';

//Internal modules
import Navbar from '../../../Components/Navbar';

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

const Home = (props) => {
    return (
        <HomeContainer>
            <Navbar />
        </HomeContainer>
    );
};

export default Home;
