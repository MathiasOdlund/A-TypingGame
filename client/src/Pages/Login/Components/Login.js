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
  height: 300px;
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
    color: #f2545b;
  }

  &:nth-child(2n + 1) {
    border: 1px solid #70d6ff;
    caret-color: #70d6ff;
    color: #70d6ff;
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
  border: 1px solid #81e979;
  color: #81e979;
  background-color: transparent;

  &:hover {
    background-color: #81e979;
    color: #121520;
  }

  &:focus {
    background-color: #59e250;
  }
`;

const Signup = (props) => {
  return (
    <SignupContainer>
      <SignupFormContainer>
        <SignupForm action="/login" method="post">
          <Title>Login</Title>
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
        </SignupForm>
      </SignupFormContainer>
    </SignupContainer>
  );
};

export default Signup;
