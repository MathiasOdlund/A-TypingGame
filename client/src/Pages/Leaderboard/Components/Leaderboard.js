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

    h1 {
        text-align: center;
        color: #fff;
        font-family: 'Poppins', sans-serif;
    }
    p {
        text-align: right;
        color: #fff;
        font-size: 14px;
        font-family: 'Poppins', sans-serif;
    }
    hr {
        margin: 0;
        padding: 0;
        height: 2px !important;
        border-radius: 3px;
        color: white !important;
    }
`;
const Region = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
    margin-right: 0;
    width: 120px;
    justify-content: space-around;
`;
const LeaderboardContestantsContainer = styled.div``;
const LeaderboardContestantPlayer = styled.div`
    margin: 12px auto;
    width: 100%;
`;
const LeaderboardContestantPlayerTop = styled.div`
    display: flex;
    margin-bottom: 12px;
`;

const LeaderboardContestantPlayerCountry = styled.img`
    margin-right: 80px;
    margin-left: 10px;
    height: 30px;
    width: 30px;
`;
const LeaderboardContestantPlayerIcon = styled.img`
    border-radius: 10px;
    height: 30px;
    width: 30px;
    margin-right: 10px;
`;
const LeaderboardContestantPlayerName = styled.h5`
    color: #dfdfdf;
    margin-top: 3px;
    font-family: 'Poppins', sans-serif;
`;

const Hr = styled.hr`
    width: 100%;
    color: #fff;
    height: 3px !important;
    background-color: #ffff;
    border-radius: 2px;
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
                            <LeaderboardContestantPlayerName>
                                Azzpr#0001
                            </LeaderboardContestantPlayerName>
                        </LeaderboardContestantPlayerTop>
                        <Hr />
                    </LeaderboardContestantPlayer>
                </LeaderboardContestantsContainer>
            </LeaderboardContainer>
        </div>
    );
};

export default Leaderboard;
