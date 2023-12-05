import React from 'react'
import {Image,Text,View,StyleSheet,ImageBackground,input} from 'react-native'
import { TextInput, Button } from 'react-native'
import { useState } from 'react'


export default function App(){

const [moeda,setMoeda]=useState('')


return(
  <View style={style.conteudo}>
   <ImageBackground
    source={require('./assets/moedas.png')}
    style={style.img}

  >

 
  <View style={style.caixinha}>

      <Text style={style.letra}>DOLAR PARA REAL</Text>
        
        <Text style={style.letra2}>Valor em Dolar - U$</Text>
        <TextInput style={style.cadastro}
        value={moeda}
        onChangeText={setMoeda}
        ></TextInput>
        <Text style={style.letra3}>Valor em Real: R$ {moeda * 4.96}</Text>

  </View>
   </ImageBackground>
  </View>
)
}
const style = StyleSheet.create({

  conteudo:{
    flex: 'center',
    width:'100%',
   
    justifyContent: 'center',
    alignItems: 'center',
 
  },
 
  caixinha:{
    backgroundColor: 'white',
    width: 400,
    height: 400,
    padding: 20,
    borderRadius: 15,
    fontWeight: 'bolder',
    flex: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
   
  },


  cadastro:{
   
    marginTop: 20,
    height: 30,
  
    width: 300,
    borderWidth: 1,
    borderColor: 'gray',
  
    outline: 'none',
    paddingHorizontal: 20,
   
  },
 
  letra:{

    fontSize: 25,
    color: 'blak',
    fontWeight: 'bold',
    fontFamily: 'arial',
    
    alignItems: 'center',
   
    justifyContent: 'center',
  },
  letra2:{
    
    color: 'gray',

    margin: 10,
    fontSize: 19,
    flex: 'center',
    justifyContent:'flex-end',
    right: 70,
    bottom: '-20px'
   

  },

 
  imagem:{
    width: 400,
  },
  img:{
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    resizeMode: 'cover',
    alignItems: 'center'
  },

  letra3:{
    fontSize: 30,
    marginTop: 20,
  },
})

