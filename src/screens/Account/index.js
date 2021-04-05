import React, { useState, useEffect } from 'react';
import {    Container, 
            Scroller, 
            HeaderArea, 
            HeaderTitle,
            ListArea
        } from './styles';

import Item from '../../components/User';

import { useNavigation } from '@react-navigation/native';

export default () => {
    const navigation = useNavigation();

    const [list, setList] = useState([]);

    const loadUser = async () => {
        setList([]);
        let user_string = '[{"tittle":"Your Profile","description":"Your settings"},{"tittle":"Your Password","description":"Configuration ","date":"PIN config"}]';
        let user = JSON.parse(user_string);
        if(user){
            setList(user);
        }
        setLoading(false);
    }

    useEffect(() => {
        loadUser();
    }, []);
    return (
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderTitle numberOfLines={1}>Configuration</HeaderTitle>
                    
                </HeaderArea>
                <ListArea>
                    {list.map((item, k)=>(
                        <Item key={k} data={item} />
                    ))}
                </ListArea>
            </Scroller>
        </Container>
    );
}