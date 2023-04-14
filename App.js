import 'react-native-reanimated';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar backgroundColor='#8000ff'/>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </>
  );
}

