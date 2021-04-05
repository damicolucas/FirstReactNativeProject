import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color:#2d5b4f;
    justify-content: center;
    align-items: center; 
`; 

export const styles = StyleSheet.create({
    TextInput: {
      marginBottom: 50,
      backgroundColor:'#afdec2',
      borderWidth: 1,
      borderRadius: 20,
      width: 250,
      textAlign: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,      
    },

    Text: {
      marginBottom: 25,
      fontSize: 30,
      textAlign: 'center',
      color: '#afdec2',
      fontWeight:"bold",
    },
  });