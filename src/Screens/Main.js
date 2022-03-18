import React, {useContext, useState} from "react";
import {FlatList, SafeAreaView, Text, View, Image, TouchableOpacity, Modal, ImageBackground, TextInput} from 'react-native';
import { Colors, Header } from "react-native/Libraries/NewAppScreen";
import Styles from "../Styles/Styles";
import { GlobalContext } from "../contexts/GlobalContext";








export default function Main({navigation}){


  const {RequireAllCars} = useContext(GlobalContext)
    
  RequireAllCars()

  return(

    <SafeAreaView style={{backgroundColor: Colors.darker, marginBottom: 15, flex:1}}>
      
      <Header />
            
        <View  style={Styles.container}>
          <SearchBar></SearchBar>

          <TouchableOpacity>
            <Text>Ver Todos os carros</Text>
          </TouchableOpacity>

          <Cars>

          </Cars>

          <Cars>
                  
          </Cars>

                
        </View>
    </SafeAreaView>
     )
}

// import React, {useContext, useState} from "react";
// import {FlatList, SafeAreaView, Text, View, Image, TouchableOpacity, Modal, ImageBackground} from 'react-native';
// import { Colors, Header } from "react-native/Libraries/NewAppScreen";
// import Styles from "../Styles/Styles";
// import { GlobalContext } from "../contexts/GlobalContext";

function Cars(props){

  const [name, setName] = useState(props.name)
  const [brand, setBrand] = useState(props.brand)
  const [price, setPrice] = useState(props.price)
  const [age, setAge] = useState(props.age)



  return(

    <TouchableOpacity style={Styles.touchable}>
      <Text></Text>

    </TouchableOpacity>

  )
}

function SearchBar(props){

  const [val, setVal] = useState(props.value)

  

  return(
    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
      <TextInput value={val} onChangeText={text => setVal(text)} style={Styles.textInput} 
      placeholderTextColor={'#8e8e8e'} placeholder={"Digite o nome, marca, preço ou ano do carro"}/>
      <TouchableOpacity>
        <Image source = {require("../Assets/Images/searchIcon.png")} resizeMode={'contain'} style={{width:40}}/>
      </TouchableOpacity>
      
    </View>
  )
}