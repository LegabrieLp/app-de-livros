import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Hobbit from './livros/Hobbit';
import OMundoDeSofia from './livros/OMundoDeSofia';
import PequenoPrincipe from './livros/PequenoPrincipe';
import PrisioneiroAzkabam from './livros/PrisioneiroAzkabam';
import Catalogo from './pages/Catalogo';

const Stack = createStackNavigator();

export default function RotasButtomCatalogo() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Catalogo" component={Catalogo} />
      <Stack.Screen name="Hobbit" component={Hobbit} />
      <Stack.Screen name="OMundoDeSofia" component={OMundoDeSofia} />
      <Stack.Screen name="PequenoPrincipe" component={PequenoPrincipe} />
      <Stack.Screen name="PrisioneiroAzkabam" component={PrisioneiroAzkabam} />
    </Stack.Navigator>
  );
}