// External modules
import React from "react";
import styled from "styled-components";

const PersonalScoreContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

const PersonalScoreTable = styled.table`
    width: 100%;
    margin-top: 200px;
    color: #fff;
`;

const Row = styled.tr`

`;

const Item = styled.td`
    text-alignment: center;
`;

const PersonalScore = (props) => {
    return(
        <PersonalScoreContainer>
            <PersonalScoreTable>
                <Row>
                    <Item>#</Item>
                    <Item>name</Item>
                    <Item>wpm</Item>
                    <Item>raw</Item>
                    <Item>acc</Item>
                    <Item>test</Item>
                    <Item>date</Item>
                </Row>
            </PersonalScoreTable>
        </PersonalScoreContainer>
    );
}

export default PersonalScore;