import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { estilos1 } from "./estilos1";
import { useState } from "react";
import logo from '../src/assets/images/google.png'



export default function Index() {
  
  return (
    <View
      style={estilos1.background}
    >
      <Image style={estilos1.img} source={logo} />
        
      <Text style={estilos1.fazerLogin}>
        Fazer login
      </Text>

       <Text style={estilos1.contaGoogle}>
         Use sua Conta do Google
       </Text>

       <TouchableOpacity activeOpacity={0.7}>
        <Text style={estilos1.saibaMais}>
          Saiba mais sobre como usar sua conta
        </Text>
       </TouchableOpacity>

       <TextInput style={estilos1.input} placeholder={'E-mail ou telefone'} placeholderTextColor={'#888'} />

       <TouchableOpacity activeOpacity={0.7}>
        <Text style={estilos1.esqueceuEmail}>
          Esqueceu seu e-mail?
        </Text>
       </TouchableOpacity>

       <TouchableOpacity activeOpacity={0.7}>
        <Text style={estilos1.criarConta}>
          Criar conta
        </Text>
       </TouchableOpacity>

       <TouchableOpacity activeOpacity={0.7}>
         <Text style={estilos1.avancar}>
           Avançar
         </Text>
       </TouchableOpacity>
    </View>
  );

  
}
