import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FontVariant, Button, ScrollView, Alert } from 'react-native';
import  Header  from './Componentes/Header.js'
import  Body  from './Componentes/Body.js'
import  Selecionador  from './Componentes/Selecionador.js'


export default class App extends React.Component{
 render(){    
    return(
      <ScrollView style={{marginTop:20, flex:1, backgroundColor:'f5f5f5'}}>
        <Header></Header>
        <Selecionador></Selecionador>
        <Body></Body>
        <BotaoHamburguer></BotaoHamburguer>
        <Text>""</Text>
        <BotaoBebidas></BotaoBebidas>
        <Text>""</Text>
        <BotaoSobremesas></BotaoSobremesas>
      </ScrollView>
    );
  }
}


const BotaoHamburguer = () =>{
  return(
  <Button
  backgroundColor='#f5f5f5'
  title="Hambúrgueres"
  color='#000000'
  onPress={()=>Alert.alert('abrir menu de hambúrgueres!')}
  ></Button>
  );
}

const BotaoBebidas = () =>{
  return(
  <Button
  title="Bebidas"
  color='#000000'
  onPress={()=>Alert.alert('abrir menu de Bebidas!')}
  ></Button>
  );
}

const BotaoSobremesas = () =>{
  return(
  <Button
  title="Sobremesas"
  color='#000000'
  onPress={()=>Alert.alert('abrir menu de Sobremesas!')}
  ></Button>
  );
}
