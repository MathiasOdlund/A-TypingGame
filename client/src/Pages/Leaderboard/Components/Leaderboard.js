// External modules
import React from 'react';
import styled from 'styled-components';

const LeaderboardContainer = styled.div`
  position: absolute;
  width: 80%;
  top: 7.5%;
  height: 90%;
  left: 50%;
  transform: translateX(-50%);

  H1 {
    text-align: center;
    color: #fff;
  }
  p {
    text-align: right;
    color: #fff;
    font-size: 14px;
  }
  hr {
    margin: 0;
    padding: 0;
    color: #fff;
  }
`;
const Leaderboard = (props) => {
  return (
    <div>
      <LeaderboardContainer>
        <h1>Leaderboards</h1>
        <p>Global / Country</p>
        <hr></hr>
      </LeaderboardContainer>
    </div>
  );
};

export default Leaderboard;
