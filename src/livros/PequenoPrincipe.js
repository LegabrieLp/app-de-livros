import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function PequenoPrincipe() {
  return (
    <ScrollView style={estilo.fundo}>
      <View style={estilo.container}>
        <Text style={estilo.titulo}>O Pequeno Príncipe</Text>

        <Image
          resizeMode="cover"
          style={estilo.img}
          source={require('../../assets/livros/pequenoprincipe.jpg')}
        />

        <View style={estilo.sinopse}>
          <Text style={estilo.genero}>Literatura infanto-juvenil e Fábula</Text>
          <Text style={estilo.textoSinopse}>
            As sábias, encantadoras e inesquecíveis histórias contadas pelo
            pequeno príncipe falam de seu próprio planeta, com seus três vulcões
            e uma flor presunçosa. Uma história maravilhosa e profunda, para
            todas as idades, e ilustrada pelo próprio autor.
          </Text>
        </View>

        <View style={estilo.autorBox}>
          <Image
            resizeMode="cover"
            style={estilo.imgAutor}
            source={require('../../assets/autores/Antoine-de-Saint-Exupery.jpg')}
          />
          <View style={estilo.autorInfo}>
            <Text style={estilo.sobreAutor}>Sobre o autor</Text>
            <Text style={estilo.autor}>Antoine de Saint-Exupéry</Text>
          </View>
        </View>
        
        <Text style={estilo.textoBiografia}>
          Foi um escritor, poeta e pioneiro da aviação francês, mundialmente
          célebre por sua obra-prima O Pequeno Príncipe. Sua vida foi marcada
          pela fusão única entre a paixão pelo voo e uma profunda sensibilidade
          filosófica sobre a condição humana. Nascido em uma família
          aristocrática em Lyon, França, Saint-Exupéry descobriu cedo o fascínio
          pelos aviões. Na década de 1920, tornou-se um dos pioneiros da
          Aéropostale, arriscando a vida em rotas postais complexas sobre a
          África e a América do Sul (incluindo o Brasil e a Patagônia). A
          solidão dos céus e os perigos enfrentados serviram de matéria-prima
          para seus relatos literários, que tratavam da coragem, da amizade e da
          responsabilidade.
        </Text>
      </View>
    </ScrollView>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5ECD9',
  },

  img: {
    width: '80%',
    marginHorizontal: 25,
    borderRadius: 10,
  },

  fundo: {
    backgroundColor: '#F5ECD9',
  },

  imgAutor: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },

  autorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 25,
  },

  autorInfo: {
    marginLeft: 15,
    flex: 1,
  },

  sobreAutor: {
    fontSize: 13,
    color: '#8D6E63',
  },

  textoBiografia: {
    fontSize: 16,
    color: '#4E342E',
    marginHorizontal: 15,
    marginTop: 12,
    lineHeight: 24,
  },

  autor: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4e3342e',
  },

  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#4E342E',
    fontWeight: '700',
    marginTop: 50,
    marginBottom: 30,
  },

  genero: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    color: '#6D4C41',
  },

  sinopse: {
    marginTop: 20,
    marginHorizontal: 15,
    backgroundColor: '#FFF8E7',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#D7C4A3',
    padding: 8,
  },

  textoSinopse: {
    fontSize: 17,
    color: '#4E342E',
    lineHeight: 26,
  },
});
