// External modules
import React from 'react';
import styled from 'styled-components';

// Internal modules
import ScoreBoard from './PersonalScore';

const ProfileContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

const LeftContainer = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PlaceholderImage = styled.img`
    width: 200px;
    height: 200px;
    margin: 200px 0 16px 0;
`;

const Name = styled.h1`
    color: #fff;
    font-size: 16px;
`;

const Location = styled.h3`
    color: #fff;
    font-size: 14px;
`;

const RightContainer = styled.div`
    width: 800px;
    height: 100%;
    display: flex;
`;

const Profile = (props) => {
    return (
        <div>
            <ProfileContainer>
                <LeftContainer>
                    <PlaceholderImage src="https://picsum.photos/200/200"></PlaceholderImage>
                    {/* Profile image */}
                    <Name>Username</Name>
                    <Location>Location</Location>
                </LeftContainer>
                <RightContainer>
                    <ScoreBoard />
                </RightContainer>
            </ProfileContainer>
        </div>
    );
};

export default Profile;
