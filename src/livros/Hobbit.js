import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Hobbit() {
  return (
  <ScrollView style={estilo.fundo}>
  <View style={estilo.container}>
    <Text style={estilo.titulo}>Hobbit</Text>

    <Image resizeMode="cover" style={estilo.img}
      source={require('../../assets/livros/hobbit.jpg')} />
    <Text style={estilo.genero}>Aventura e Fantasia</Text>

        <View style={estilo.sinopse}>
          <Text style={estilo.textoSinopse}>
            Bilbo Bolseiro era um hobbit tranquilo e satisfeito, vivendo
            confortavelmente em sua toca, com refeições fartas e nenhum
            interesse por aventuras. Até que, certo dia, sua rotina é virada de
            cabeça para baixo com a chegada do mago Gandalf e de treze anões
            determinados a recuperar um tesouro perdido. Convocado a participar
            dessa jornada inesperada, Bilbo embarca em uma travessia perigosa
            pela Terra-média, enfrentando trols, gobelins e até mesmo Smaug, o
            Dourado, guardião do tesouro e mais temido dragão da região.
            Prelúdio dos eventos de O Senhor dos Anéis, O Hobbit é uma das
            histórias mais amadas da literatura fantástica. Nesta adaptação em
            quadrinhos, lindamente ilustrada por David Wenzel, a aventura de
            Bilbo ganha nova vida e se torna um clássico por mérito próprio.
          </Text>
        </View>
     

 <View style={estilo.autorBox}>
      <Image resizeMode="cover" style={estilo.imgAutor}
        source={require('../../assets/autores/jrr-tolkien.jpg')} />
      <View style={estilo.autorInfo}>
        <Text style={estilo.sobreAutor}>Sobre o autor</Text>
        <Text style={estilo.autor}>John Ronald Reuel Tolkien</Text>
      </View>
    </View>
    <Text style={estilo.textoBiografia}>  É amplamente reconhecido como o pai da literatura fantástica
                moderna. Mais do que contar histórias, Tolkien criou mundos
                inteiros, dotados de geografias complexas, culturas profundas e
                até mesmo línguas totalmente funcionais, como o Élfico. Nascido
                na África do Sul e criado na Inglaterra, Tolkien foi um
                brilhante acadêmico, filólogo e professor de anglo-saxão e
                literatura na Universidade de Oxford. Sua paixão acadêmica por
                línguas antigas e mitologias nórdicas e germânicas serviu como o
                solo fértil onde nasceu a Terra-média, o universo fictício que
                encantou gerações.</Text>
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
    width:'80%',
    marginHorizontal: 25,
    borderRadius: 10,

  },

  fundo: { 
    backgroundColor: '#F5ECD9', 
    },

imgAutor: { 
  width: 90, 
  height: 90, 
  borderRadius: 45 
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
   lineHeight: 24 
  },

  autor: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#4e3342e', 
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