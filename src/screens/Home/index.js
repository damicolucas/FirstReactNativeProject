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
        let items_string = '[{"tittle":"Monday","description":"30° C 20mm ","date":"Today is 05/04/2021"},{"tittle":"tuesday","description":"30° C 20mm ","date":"Today is 05/04/2021"},{"tittle":"wednesday","description":"30° C 20mm ","date":"Today is 06/04/2021"},{"tittle":"thursday","description":"30° C 20mm ","date":"Today is 07/04/2021"},{"tittle":"friday ","description":"30° C 20mm ","date":"Today is 08/04/2021"},{"tittle":"saturday","description":"30° C 20mm ","date":"Today is 09/04/2021"},{"tittle":"sunday","description":"30° C 20mm ","date":"Today is 10/04/2021"}]';
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
                    <HeaderTitle numberOfLines={1}>Weather</HeaderTitle>
                    
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