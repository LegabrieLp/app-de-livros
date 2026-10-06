import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, EduQLDHand_400Regular } from '@expo-google-fonts/edu-qld-hand';

export default function Sobre() {
   const [fontsLoaded] = useFonts({
    'EduQLDHand_400Regular': EduQLDHand_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View style={estilo.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <View style={{flex:1}}>
    <ScrollView style={estilo.container} contentContainerStyle={estilo.content}>
      <Text style={estilo.titulo}>Sobre Nós</Text>

      <View style={estilo.card}>
        <Text style={estilo.nomeApp}>História em Páginas</Text>
        <Text style={estilo.texto}>
          Nosso objetivo com essa aplicação é trazer uma experiência única ao leitor, podendo acessar os livros de sua preferência a qualquer lugar e em qualquer momento.
        </Text>
      </View>

      <View style={estilo.card}>
        <Text style={estilo.subtitulo}>Integrantes</Text>
        <Text style={estilo.texto}>Gustavo</Text>
        <Text style={estilo.texto}>Gabriel</Text>
      </View>

      <View style={estilo.card}>
        <Text style={estilo.subtitulo}>Tecnologias</Text>
        <Text style={estilo.texto}>React Native, JavaScript</Text>
        <Text style={estilo.texto}>Expo, React Navigation</Text>
        <Text style={estilo.texto}>Google Fonts</Text>
      </View>

      <TouchableOpacity style={estilo.botao} onPress={() => navigation.goBack()}>
        <Text style={estilo.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
     <View style={estilo.rodape}>
      <Text style={estilo.textoRodape}>
      Desenvolvido por Gustavo Alves & Gabriel </Text>
      </View>
      </View>
  );
}

const estilo = StyleSheet.create({
  container: { 
  flex: 1, 
  backgroundColor: '#00000' },

  content: { 
  padding: 20, 
  alignItems: 'center' },

  rodape:{
      backgroundColor:'#4E342E',
      paddingVertical: 12,
      alignItems:'center'
   },

   textoRodape:{
     color:'#F5ECD9',
     fontSize:14,
  fontFamily:'EduQLDHand_400Regular',
   },

  titulo: { 
  fontSize: 26, 
  fontWeight: 'bold', 
  color: '#4E342E', 
  marginVertical: 20, 
  fontFamily: 'EduQLDHand_400Regular' },

  card: { 
  backgroundColor: '#F5ECD9', 
  width: '100%', 
  padding: 15, 
  borderRadius: 10, 
  marginBottom: 15, 
  alignItems: 'center', 
  elevation: 2 },

  nomeApp: { 
  fontSize: 20, 
  fontWeight: 'bold', 
  color: '#4E342E', 
  marginVertical: 8, 
  fontFamily: 'EduQLDHand_400Regular' },

  subtitulo: {
  fontSize: 18, 
  fontWeight: 'bold', 
  color: '#4E342E', 
  marginBottom: 8, 
  fontFamily: 'EduQLDHand_400Regular' },

  texto: { 
  fontSize: 14, 
  color: '#555', 
  textAlign: 'center', 
  marginVertical: 2 },

  botao: { 
  backgroundColor: '#7B4A2D', 
  width: '100%', 
  padding: 12, 
  borderRadius: 8, 
  alignItems: 'center', 
  marginBottom: 30 },

  textoBotao: {

  color: '#fff', 
  fontSize: 16, 
  fontWeight: 'bold' }
  
});