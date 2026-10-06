import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function PrisioneiroAzkabam() {
  return (
    <ScrollView style={estilo.fundo}>
      <View style={estilo.container}>
        <Text style={estilo.titulo}>Harry Potter</Text>

        <Image
          resizeMode="cover"
          style={estilo.img}
          source={require('../../assets/livros/harrypotter.jpg')}
        />
   <View style={estilo.sinopse}>
          <Text style={estilo.genero}>Fantasia,Aventura e Mistério</Text>
          <Text style={estilo.textoSinopse}>
           As aulas estão de volta à Hogwarts e Harry Potter não vê a hora de
            embarcar no expresso a vapor que o levará de volta à escola de
            bruxaria. Mais uma vez suas férias na rua dos Alfeneiros foi triste
            e solitária. Com muita ação, humor e magia, 'Harry Potter e o
            prisioneiro de Azkaban' traz de volta o gigante atrapalhado Rúbeo
            Hagrid, o sábio diretor Alvo Dumbledore, a exigente professora de
            transformação Minerva MacGonagall e o novo mestre Lupin, que guarda
            grandes surpresas para Harry.
             </Text>
        </View>
          
          <View style={estilo.autorBox}>
          <Image
            resizeMode="cover"
            style={estilo.imgAutor}
            source={require('../../assets/autores/jk-rowling.jpg')}
          />
          <View style={estilo.autorInfo}>
            <Text style={estilo.sobreAutor}>Sobre o autor</Text>
            <Text style={estilo.autor}>Joanne Rowling</Text>
          </View>
          </View>
         <Text style={estilo.textoBiografia}>
Conhecida profissionalmente como J.K. Rowling, é uma escritora e filantropa britânica mundialmente famosa por ser a autora da série Harry Potter, uma das franquias literárias e cinematográficas mais bem-sucedidas da história.
Nascida em Yate, Gloucestershire, Inglaterra, Rowling sempre demonstrou paixão por escrever histórias desde a infância. A ideia para o jovem bruxo surgiu em 1990, durante uma viagem de trem atrasada de Manchester para Londres. Nos anos seguintes, enfrentando dificuldades financeiras pessoais, depressão e o desafio de criar sua filha pequena como mãe solo, ela continuou redigindo os rascunhos do primeiro livro em cafés locais de Edimburgo.
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
