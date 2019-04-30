import React from 'react';
import { createStackNavigator } from 'react-navigation';

import PokeList from './components/PokeList';
import Pokemon from './components/Pokemon';
import Home from './components/Home';


const RootStack = createStackNavigator({
    Home: { screen: Home },
    PokeList: { screen: PokeList },
    Pokemon: {screen: Pokemon }
  },
  {
    initialRouteName:  'Home'
  })

const App = () => {
  return <RootStack />
}

export default App;
