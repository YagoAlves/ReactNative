import React from 'react';
import {Text, View, Button, AppRegistry } from 'react-native';

const gerarNumeroAleatorio = () => {

  var numero_aleatorio = Math.radom();
  numero_aleatorio = Math.floor(numero_aleatorio * 10);
  alert(numero_aleatorio)

};

const App = () => {

  return ( 
    <View> 
      <Text> Gerador de numeros aleatorios !! </Text>
      <Button 
        title="Gerar numero aleatorio"
        onPress={gerarNumeroAleatorio}
      /> 
    </View>
  );

};

AppRegistry.registerComponent('app1', () => App);