import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useFonts, EduQLDHand_400Regular } from '@expo-google-fonts/edu-qld-hand';

export default function Catalogo() {
  const navigation = useNavigation();

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
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Os melhores Livros Você encontra</Text>

      <FlatList
        data={artistas}
        keyExtractor={(item) => item.uid.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={estilo.artista} 
            onPress={() => navigation.navigate(item.buttom)} 
            activeOpacity={0.7}
          >
            <Text style={estilo.txtArtista}>{item.nome}</Text>
            
            <View style={estilo.rede}>
              <Text style={estilo.curtidas}>
                <MaterialCommunityIcons name="thumb-up" size={20} color="#F00" />
                {' '}{item.like} Curtidas
              </Text>
              
              <Text style={estilo.seguidores}>
                <MaterialCommunityIcons name="account-heart" size={20} color="blue" />
                {' '}{item.seguidores} Seguidores
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const artistas = [
  { uid: 1, 
  nome: 'O Hobbit', 
  like: 2000, 
  seguidores: 10000, 
  buttom: 'Hobbit' },
  
  { uid: 2, 
  nome: 'O Mundo de Sofia', 
  like: 4500, 
  seguidores: 15000, 
  buttom: 'OMundoDeSofia' },

  { uid: 3, 
  nome: 'O Pequeno Príncipe', 
  like: 850, 
  seguidores: 4345, 
  buttom: 'PequenoPrincipe' },

  { uid: 4, 
  nome: 'Harry Potter e o Prisioneiro de Azkabam', 
  like: 2500, 
  seguidores: 3450, 
  buttom: 'PrisioneiroAzkabam' },
];


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a4d2f7',
  },
  artista: {
    
    backgroundColor: '#7B4A2D',
    justifyContent: 'center',
    margin: 15,
    padding: 15,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 26,
    textAlign: 'center',
    color: '#4E342E',
    fontWeight: 'bold',
    marginVertical: 30,
    paddingHorizontal: 10,
    fontFamily: 'EduQLDHand_400Regular',
  },
  rede: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  txtArtista: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 5,
    color: '#FFF8E7',
    fontFamily: 'EduQLDHand_400Regular',
  },
  curtidas: {
    fontSize: 14,
    color: '#4E342E',
  },
  seguidores: {
    fontSize: 14,
    color: '#4E342E',
  },
});