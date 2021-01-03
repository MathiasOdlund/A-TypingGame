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
}).then(function awnser(response) {
    console.log(response)
    const quote = response.data.content;
    return quote;
  });

const TypingContainer = styled.div`
    width: 100%;
    height: 100%;
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    background-color: #13161F;
    border: 5px solid #11131A;
`;
const TextArea = styled.input`
    width: 98%;
    margin: auto;
    display: block;
    background-color: transparent;
    color: rgba(207,207,207,1);
    border-radius: 1px;
    border: 5px solid #11131A;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    font-family: 'Fira Code', monospace;
    background-color: #1A1F2E;
    font-size: 18px;
    padding: 5px;
    &:focus{
        border-shadow: yellow !important;
        outline: none;
    }
`;
const QuoteArea = styled.div`
    width: 98%;
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
                <QuoteArea autocorrect="off" autocapitalize="off" type="text" id="quote">{}</QuoteArea>
                <TextArea />
            </InputContainer>
        </TypingContainer>
    );
};

export default Typing;
