import React from 'react';
import { Text } from 'react-native';

import styled from 'styled-components/native';

const TabArea = styled.View`
    height: 60px;
    background-color: #afdec2;
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;    
    justify-content: center;
    align-items: center;
`;

export default ({state, navigation}) => {

    const goTo = (screeName) => {
        navigation.navigate(screeName);
    }

    return (
        <TabArea>
            <TabItem onPress={()=>goTo('Home')}>
                <Text>Home</Text>
            </TabItem>

            <TabItem onPress={()=>goTo('Account')}>
                <Text>Account</Text>
            </TabItem>
        </TabArea>
    );
}