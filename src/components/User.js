import React from 'react';
import styled from 'styled-components/native';


const Area = styled.TouchableOpacity`
    background-color: #afdec2;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;

const InfoArea = styled.View`
    margin-left: 20px;
    justify-content: center;
`;

const Info = styled.Text`
    font-size: 17px;
    font-weight: bold;
`;


export default ({data}) => {
    return (
        <Area>
            <InfoArea>
                <Info>{data.tittle}</Info>
                <Info>{data.description}</Info>
                <Info>{data.date}</Info>
            </InfoArea>
        </Area>
    );
}