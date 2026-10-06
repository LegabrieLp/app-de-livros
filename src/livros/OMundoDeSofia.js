import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function OMundoDesofia() {
  return (
    <ScrollView style={estilo.fundo}>
      <View style={estilo.container}>
        <Text style={estilo.titulo}>O mundo de sofia</Text>

        <Image
          resizeMode="cover"
          style={estilo.img}
          source={require('../../assets/livros/sofia.jpg')}
        />

        <View style={estilo.sinopse}>
          <Text style={estilo.genero}>Filosofia e Romance</Text>
          <Text style={estilo.textoSinopse}>
            Quem é você? A jovem Sofia Amundsen não sabe muito bem como
            responder a essa pergunta que chegou pelo correio. O envelope é o
            primeiro de uma série de pacotes misteriosos que, juntos, compõem um
            curso de filosofia inusitado, em que grandes pensadores da história
            ocidental ― como Sócrates, Aristóteles, Santo Agostinho e Galileu ―
            aparecem em pessoa para compartilhar suas ideias com a garota. A
            cada nova lição, Sofia se torna mais e mais questionadora, começa a
            interagir com os elementos da página e a extrapolar os limites dos
            quadrinhos que a cercam, numa aventura metalinguística. Aos poucos,
            ela começa a desvendar um intrigante mistério e se aproximar de quem
            realmente é. Neste primeiro volume da adaptação para os quadrinhos
            de O mundo de Sofia , Vincent Zabus e Nicoby trazem para os dias
            atuais o clássico de Jostein Gaarder que já alcançou dezenas de
            milhões de leitores desde sua publicação em 1991.
          </Text>
        </View>

        <View style={estilo.autorBox}>
          <Image
            resizeMode="cover"
            style={estilo.imgAutor}
            source={require('../../assets/autores/jostein-gaarder.jpg')}
          />
          
          <View style={estilo.autorInfo}>
            <Text style={estilo.sobreAutor}>Sobre o autor</Text>
            <Text style={estilo.autor}>Jostein Gaarder</Text>
          </View>
        </View>
        <Text style={estilo.textoBiografia}>
          É amplamente reconhecido como o pai da literatura fantástica. É um
          aclamado escritor e professor norueguês, mundialmente famoso por
          transformar conceitos filosóficos complexos em narrativas cativantes e
          acessíveis para leitores de todas as idades. Nascido em Oslo, Noruega,
          em uma família de educadores, Gaarder formou-se em filosofia, teologia
          e literatura na Universidade de Oslo. Antes de se dedicar
          integralmente à carreira literária, trabalhou por anos como professor
          de filosofia e história das ideias no ensino secundário. Essa
          experiência em sala de aula moldou seu estilo único: a habilidade
          genuína de despertar a curiosidade e o pensamento crítico sobre o
          sentido da vida, a existência e o universo.
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
    width: 300,
    height: 380,
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