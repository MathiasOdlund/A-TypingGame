// External modules
import React from 'react';
import styled from 'styled-components';

// Internal modules
import CountryTemplate from '../../../Assets/Img/Country/svg/norway.svg';

const LeaderboardContainer = styled.div`
  margin: auto;
  width: 80%;
  top: 7.5%;
  height: 90%;

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
const Region = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: 0;
  width: 130px;
  justify-content: space-around;
`;
const LeaderboardContestantsContainer = styled.div``;
const LeaderboardContestantPlayer = styled.div`
  margin: 30px auto;
  width: 50%;
`;
const LeaderboardContestantPlayerTop = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const LeaderboardContestantPlayerCountry = styled.img`
  margin-right: 50px;
  height: 50px;
  width: 50px;
`;
const LeaderboardContestantPlayerIcon = styled.img`
  border-radius: 10px;
`;

const Vhr = styled.div`
  border-left: 1px solid #e1e1e1;
  height: 50px;
  border-radius: 10px;
  margin-right: 10px;
`;
const Hr = styled.hr`
  width: 100%;
  color: #fff;
`;
const Leaderboard = (props) => {
  return (
    <div>
      <LeaderboardContainer>
        <h1>Leaderboards</h1>
        <Region>
          <p>Global</p>
          <p>Country</p>
        </Region>
        <hr></hr>
        <LeaderboardContestantsContainer>
          <LeaderboardContestantPlayer>
            <LeaderboardContestantPlayerTop>
              <LeaderboardContestantPlayerCountry
                src={CountryTemplate}
              ></LeaderboardContestantPlayerCountry>

              <LeaderboardContestantPlayerIcon src="https://placebear.com/50/50"></LeaderboardContestantPlayerIcon>
            </LeaderboardContestantPlayerTop>
            <Hr />
          </LeaderboardContestantPlayer>
        </LeaderboardContestantsContainer>
      </LeaderboardContainer>
    </div>
  );
};

export default Leaderboard;
