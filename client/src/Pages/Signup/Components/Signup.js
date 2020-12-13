// External modules
import React from "react";
import styled from "styled-components";

const SignupContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121520;
`;

const SignupFormContainer = styled.div`
  width: 960px;
  height: 680px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignupForm = styled.form`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 54px;
  color: #f9c846;
`;

const InputField = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background-color: rgb(29, 34, 52, 0.4);
  margin-bottom: 10px;
  padding-left: 25px;
  outline: none;
  font-size: 16px;

  &:nth-child(2n) {
    border: 1px solid #f2545b;
    caret-color: #f2545b;
    color: #f9c846;

  }

  &:nth-child(2n + 1) {
    border: 1px solid #f2545b;
    caret-color: #f2545b;
    color: #f9c846;

  }

  &:focus {
    border-width: 3px;
    background: transparent;
  }
`;

const Submit = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  border-radius: 25px;
  outline: none;
  border: 1px solid #f2545b;
  color: #f2545b;
  background-color: transparent;

  &:hover {
    border: 1px solid #f9c846;
    background-color: #f9c846;
    color: #121520;
  }

  &:focus {
    background-color: #59e250;
  }
`;

//If the user has an account or not
const AllReadyHaveAnAccount = styled.p`
  text-align:center;
  margin-top:20px;
  color: #f9c846;
  span{
    color: red;
    text-decoration: underline;
    &:hover{
      cursor:pointer;
    }
  }
`
const Signup = (props) => {
  return (
    <SignupContainer>
      <SignupFormContainer>
        <SignupForm action="/signup" method="post">
          <Title>Signup</Title>
          <InputField
            type="email"
            placeholder="Email"
            name="email"
            autoComplete="off"
          />
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
          />
          <Submit type="submit" value="Submit" />
          <AllReadyHaveAnAccount>Allready have an account? <span>Log in here</span></AllReadyHaveAnAccount>
        </SignupForm> 
      </SignupFormContainer>
     
    </SignupContainer>
  );
};

export default Signup;
