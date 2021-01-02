// External modules
import React from 'react';
import styled from 'styled-components';
const axios = require('axios').default;
//Internal modules

//Getting a random quote
//using axios to get the quote
axios({
    params:{
        minLength: 20,
        maxLength: 50
    },
    url: `http://api.quotable.io/random`
}).then(function (response) {
    console.log(response)
    document.getElementById('quote').innerHTML = response.data.content;
  });

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
`;
const TextArea = styled.input`
    width: 900px;
    margin: auto;
    display: block;
    background-color: transparent;
    color: white;
    border: 3px solid white;
    border-radius: 3px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    &:focus{
        border-shadow: yellow !important;
    }
`;
const QuoteArea = styled.div`
    border: 2px solid red;
    width: 900px;
    margin: auto;
    height: 30%;
    position: relative;
    top: 50%;
    color: white;
    transform: translateY(-50%);
    text-align: center; 
    font-size: 20px;
    font-family: 'Fira Code', monospace;

`;
const Typing = (props) => {
    return (
        <TypingContainer>
            <InputContainer>
                <QuoteArea autocorrect="off" autocapitalize="off" type="text" id="quote"></QuoteArea>
                <TextArea />
            </InputContainer>
        </TypingContainer>
    );
};

export default Typing;
