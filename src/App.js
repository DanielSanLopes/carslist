import React, {useContext} from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Image} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from "@react-navigation/native"
import GlobalProvider, { GlobalContext } from './contexts/GlobalContext';


import Main from './Screens/Main';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator()

const App = () => {
  
  
       










  return (
    <NavigationContainer>
      <GlobalProvider>
      <StatusBar backgroundColor={"#171717"} barStyle={'light-content'} />
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'Main'} theme = {{dark: true}}>
          <Stack.Screen name = 'Main' component={Main}/>
        </Stack.Navigator>
      </GlobalProvider>
    </NavigationContainer>

  );
};



export default App;
