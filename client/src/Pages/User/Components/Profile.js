// External modules
import React from "react";
import styled from "styled-components";

// Internal modules
import PersonalScore from "./PersonalScore";

const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const LeftContainer = styled.div`
  width: 25%;
  height: 100%;
  border-right: 4px solid #2f4858;
  left: 0;
`;

const Username = styled.h1`
  font-size: 24px;
`;

const KeyboardLayout = styled.p`

`;

const UserAverageSpeed = styled.p`

`;

const RightContainer = styled.div`
  width: 75%;
  height: 100%;
`;

const Profile = (props) => {
  return(
    <ProfileContainer>
      <LeftContainer>
        <Username>{/* TODO: Insert Data */}</Username>
        <KeyboardLayout>{/* TODO: Insert Data */}</KeyboardLayout>
        <UserAverageSpeed>{/* TODO: Insert Data */}</UserAverageSpeed>
      </LeftContainer>
      <RightContainer>
        <PersonalScore />
        {/* ^^TODO: Add table for data of personal score */}
      </RightContainer>
    </ProfileContainer>
  );
}

export default Profile;