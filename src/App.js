import React, {useContext} from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View,} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from "@react-navigation/native"
import GlobalProvider, { GlobalContext } from './contexts/GlobalContext';



const App = () => {
  
  //const {RequireAllCars} = useContext(GlobalContext)
  const baseUrl = "http://api-test.bhut.com.br:3000/api/cars"

  async function RequireAllCars(){

    let response =await fetch (baseUrl, {
        METHOD: 'GET',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).catch((error)=>console.error("RequireAllCars Error: " + error))

    if (response){
        var cars = []
        let res = await response.json()
        res.map ((item)=>console.log({...item}))
       

        //console.log ("Result " + cars[0].age )
    }


}

  RequireAllCars()



  return (
    // <GlobalProvider>
      <SafeAreaView style={{backgroundColor: Colors.darker}}>
        <StatusBar backgroundColor={"#171717"} barStyle={'light-content'} />
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={{backgroundColor: Colors.darker}}>
            <Header />
            
              <View  style={{ backgroundColor: Colors.darker }}>

                <Text>sgdhuasgdu</Text>
        
              </View>
          </ScrollView>
      </SafeAreaView>
    // </GlobalProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
