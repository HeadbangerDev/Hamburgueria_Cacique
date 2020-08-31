import React, {
    useState
} from 'react';
import {
    Text,
    Picker,
    font,
    ScrollView,
    StyleSheet,
    Image
} from 'react-native';

const Body = () => {
    return ( <
        Text style = {
            {
                textAlign: 'center',
                paddingBottom: 10,
                fontWeight: 'bold',
                backgroundColor: '#f5f5f5',
                width: '100%'
            }
        } >
        Selecione o seu cardápio 2:
        <
        /Text>    
    );
}

export default Body;