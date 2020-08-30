import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Header = () =>{
    return(
        <View>
            <View style={{backgroundColor:'#f5f5f5', padding:20, width:'100%'}}>
                <Text style={{textAlign:'center', fontWeight: 'bold', fontSize:30, color:'black'}}>HAMBURGUERIA CACIQUE</Text>
                <Text style ={{textAlign:'center', color:'black', fontWeight:'bold'}}>
                    Peça aqui o seu lanche sem precisar sair do lugar.
                </Text>
            </View>
            <View style={{backgroundColor:'#f5f5f5', width:'100%'}}>
            <Image 
            style={{
                width:150, height:150, alignSelf:'center'
            }}
            source={{
                uri: 'https://scontent.fcgh29-1.fna.fbcdn.net/v/t1.0-9/14915587_728921683931947_3995171119706834205_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=tjNLjW5RLp0AX-7N0Y6&_nc_ht=scontent.fcgh29-1.fna&oh=c8e892e9a75566d77c895ec6d9a3e446&oe=5F71F6A9'
            }} 
            />
            </View>
            <View style={{backgroundColor:'#f5f5f5', padding:20, width:'100%', alignItems:'center', fontWeight:'bold'}}>
                <Text>
                    Selecione a quantidade de pessoas na mesa:
                </Text>
            </View>
        </View>    
    );
}

export default Header;
