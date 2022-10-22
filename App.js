import * as react from 'react';
import { StyleSheet, View, Text, Image, ScrollView, ImageBackground, HorizontalScrollView } from 'react-native';

export default function App() {
  return(
    <View style={estilo.container}>
      <ImageBackground  
      source={require('./assets/papelCoffee.png')} 
      style={{width: 400, height: 850}}  
      >
      <ScrollView>
      <Text style={estilo.titulo}>Padaria Ferraz</Text>
      <Text style={estilo.subTitulo}>A melhor padaria que você já viu!</Text>
      <Text style={estilo.categoria}>DOCES</Text>
      
      <Text style={estilo.texto}>Donut</Text>
      <View style={estilo.img}>
      <Image source={require("./assets/Donuts.png")} style={{width: 190, height: 150}} />
      </View>
      <Text style={estilo.texto}>Tortinha de Morango</Text>
      <View style={estilo.img}>
      <Image source={require("./assets/Tortinha.png")} style={{width: 240, height: 150}}/>
      </View>
      <Text style={estilo.texto}>Carolina</Text>
      <View style={estilo.img}>
      <Image source={require("./assets/Carolina.png")} style={{width: 145, height: 160}}/>
      </View>
      <Text style={estilo.texto}>Bolo</Text>
      <View style={estilo.img}>
      <Image  source={require("./assets/Bolo.png")} style={{width: 230, height: 160}}/>

      <Text style={estilo.categoria}>Salgados</Text>
      <Text style={estilo.texto}>Baguete Recheada</Text>
      <View style={estilo.img}>
      <Image source={require("./assets/Baguete.png")} style={{width: 230, height: 160}} />
      </View>

      </View>
      </ScrollView>
      </ImageBackground>
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1,
    alignItems: "center",
    justifyContent:"center"
  },

  titulo:{
    marginBottom:25,
    fontSize:40,
    color:"#000000",
    fontWeight: "900",
    alignItems: "center",
    justifyContent:"center",
    marginTop:45,
    marginLeft:95
  },

  subTitulo:{
    fontSize:15,
    color:"#000000",
    marginHorizontal:10,
    marginTop: 5,
    textAlign:"center"
  },

  categoria:{
    marginTop: 50,
    color:"#000000",
    textAlign:"center",
    marginBottom:25,
    fontWeight:"900",
    fontSize:25
  },

  texto:{
    color:"#000000",
    textAlign:"center",
    marginBottom:25,
    fontWeight:"900",
  },

  imagens:{
    height:500,
    width:300
  },

  img:{
    alignItems:"center"
  }

})