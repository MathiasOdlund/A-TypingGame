// External modules
import React from 'react';
import styled from 'styled-components';

//Internal modules
console.log('gey');

const TypingContainer = styled.div`
width: 100%;
height: 100%;
`;
const InputContainer = styled.div`
width: 80%; 
height: 60%;
position: absolute;
left: 50%;
transform: translateX(-50%);
border: 2px solid red;

input{
    width: 900px;
    margin: auto;
    display: block;
    background-color: transparent;
    color: white;
    border: 3px solid white;
    border-radius: 3px;
}
`;
const Typing = (props) => {
    return (
    <TypingContainer>
        <InputContainer>
        <input />
        </InputContainer>
        
    </TypingContainer>
    );
};

export default Typing;
