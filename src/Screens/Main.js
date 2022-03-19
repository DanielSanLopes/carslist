import React, {useContext, useState} from "react";
import {FlatList, SafeAreaView, Text, View, Image, TouchableOpacity, Modal, ImageBackground, TextInput} from 'react-native';
import { Colors, Header } from "react-native/Libraries/NewAppScreen";
import Styles from "../Styles/Styles";
import { GlobalContext } from "../contexts/GlobalContext";








export default function Main({navigation}){


  const {RequireAllCars} = useContext(GlobalContext)
  const [car, setCar] = useState([])
    
  RequireAllCars()

  return(

    <SafeAreaView style={{backgroundColor: Colors.darker, marginBottom: 15, flex:1}}>
      
      <Header />
            
        <View  style={Styles.container}>
          <SearchBar></SearchBar>

          
          <View style={{height:'10%'}}/>

          <TouchableOpacity style={{alignSelf:'center'}}>
            <View style={[Styles.button, {shadowOffset:{width: 40, height: 40},
        elevation:40}]}>
              <Text style={{color: '#4c3c3f', fontSize:20, fontWeight:'bold'}} >Ver Todos</Text>
            </View>
          </TouchableOpacity>

          <Modal animationType='slide' visible={false} transparent={true}>
            <View style={[Styles.container,{flex:0, height:'69.4%', top:'28.6%', backgroundColor:'white'}]}>
              <FlatList 
              contentContainerStyle={{marginVertical: 0}}
              data={car}
              keyExtractor={item => String(item.id)}
              renderItem={({item}) => <Cars car={item}/>}>
              </FlatList>

            </View>
          </Modal>

          {/* <Cars>

          </Cars>

          <Cars>
                  
          </Cars> */}

                
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

  const [name, setName] = useState(props.car.name)
  const [brand, setBrand] = useState(props.car.brand)
  const [price, setPrice] = useState(props.car.price)
  const [age, setAge] = useState(props.car.age)



  return(

    <TouchableOpacity style={Styles.touchableCar}>
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