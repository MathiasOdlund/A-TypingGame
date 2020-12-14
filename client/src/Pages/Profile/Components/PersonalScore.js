// External modules
import React from "react";
import styled from "styled-components";

const ScoreBoardContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

const ScoreBoardTable = styled.table`
    width: 100%;
    margin-top: 200px;
    color: #fff;
`;

const Row = styled.tr`

`;

const Item = styled.td`
    text-alignment: center;
`;

const ScoreBoard = (props) => {
    return(
        <ScoreBoardContainer>
            <ScoreBoardTable>
                <Row>
                    <Item>#</Item>
                    <Item>name</Item>
                    <Item>wpm</Item>
                    <Item>raw</Item>
                    <Item>acc</Item>
                    <Item>test</Item>
                    <Item>date</Item>
                </Row>
            </ScoreBoardTable>
        </ScoreBoardContainer>
    );
}

export default ScoreBoard;