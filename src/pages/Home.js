import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native';
import { useFonts, EduQLDHand_400Regular } from '@expo-google-fonts/edu-qld-hand';

export default function Home ({ irPara, navigation }) {
  const [fontsLoaded] = useFonts({
    'EduQLD-Regular': EduQLDHand_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View style={estilo.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

const handleNavegar = () => {
    if (typeof irPara === 'function') {
      irPara('Catalogo');
    } else if (navigation) {
      navigation.navigate('Catalogo');
    }
  };
  return ( 

     <ImageBackground
    style={estilo.container}
    resizeMode="contain"
    source={require('../../assets/logo/logoappbiblio.jpg')} >
   

    <TouchableOpacity style={estilo.botao} onPress={handleNavegar}>
     <View>
        <Text style={estilo.textoBotao}>Catálogo</Text>
        <Text style={estilo.subTextoBotao}>Ver livros -</Text>
        </View>
    </TouchableOpacity>
  </ImageBackground>
);
}

const estilo = StyleSheet.create({
  container:{
  flex:1,
  justifyContent:'flex-end',
  backgroundColor: 'white',
  alignItems: 'center',
  paddingHorizontal: 20,
  paddingBottom: 40,
   },
   
   botao:{
 flexDirection: 'row',
    alignItems: 'center',
     justifyContent: 'center',
    backgroundColor: '#7B4A2D',
  borderWidth: 1,
    borderColor: '#C8A24A',
    width: '100%',
    paddingVertical: 16,
    marginBottom: 15,
    borderRadius: 12,
   },

   textoBotao:{
fontSize: 18,
fontFamily: 'EduQLD-Regular',
    color: '#FFF8E7',
   },

   subTextoBotao: {
  fontSize: 12,
  fontFamily: 'EduQLD-Regular',
  color: '#E8D8B8',
  marginTop: 2,
},
});

  