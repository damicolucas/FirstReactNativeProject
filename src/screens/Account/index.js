import React, { useState, useEffect } from 'react';
import {    Container, 
            Scroller, 
            HeaderArea, 
            HeaderTitle,
            ListArea
        } from './styles';

import Item from '../../components/Item';

import { useNavigation } from '@react-navigation/native';

export default () => {
    const navigation = useNavigation();

    const [list, setList] = useState([]);

    const loadItems = async () => {
        setList([]);
        let items_string = '[{"tittle":"Your Profile","description":"Your settings"},{"tittle":"Your Password","description":"Configuration ","date":"PIN config"}]';
        let items = JSON.parse(items_string);
        if(items){
            setList(items);
        }
        setLoading(false);
    }

    useEffect(() => {
        loadItems();
    }, []);
    return (
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderTitle numberOfLines={1}>Confi</HeaderTitle>
                    
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