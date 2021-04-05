import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { Container, LoadingIcon } from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

export default () => {

    const navigation = useNavigation();

    useEffect(()=> {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token) {
                null
            } else {
                setTimeout(() => {
                    navigation.navigate('Login');
                    }, 1500);
            }
        }
        checkToken();
    },  []);

    return (
        <Container>
            <Image
                source={require('../../img/logo_pb.png')} 
            />
            <LoadingIcon size="large" color="#000"/>
        </Container>
    );
}