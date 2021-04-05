import React  from 'react';
import { Container, styles } from './styles';
import { Text, TextInput, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default () => {

    const navigation = useNavigation();
    
    return (
        <Container>
            <Image
                source={require('../../img/logo_pb.png')} 
            />
            <Text style={styles.Text}>Login</Text>
            <TextInput style={styles.TextInput} placeholder="Usuário"></TextInput>
            <TextInput style={styles.TextInput} placeholder="Senha"></TextInput>
            <Button 
                color="#afdec2"
                title="Go to Details"
                shadowColor="#000"
                shadowOffset= "20"
                shadowOpacity= "0.37"
                shadowRadius= "7.49"
                elevation= "12"  
                onPress={() => navigation.navigate('Home')}
            ></Button>
        </Container>
        
    );
} 


