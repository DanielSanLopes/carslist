import React, {useContext, useState, useEffect} from "react";
import {FlatList, SafeAreaView, Text, View, Image, TouchableOpacity, Modal, ImageBackground, TextInput, ActivityIndicator, LogBox,
} from 'react-native';
import { Colors, Header } from "react-native/Libraries/NewAppScreen";
import Styles from "../Styles/Styles";
import { GlobalContext } from "../contexts/GlobalContext";
import { useIsFocused } from "@react-navigation/native";








export default function Main({navigation}){

  let cont = 0
  let id


  const {RequireAllCars, cars, loading, loaded, setLoaded} = useContext(GlobalContext)

  var focoused = useIsFocused()

 

  // useEffect(()=>{
  //   async function t (){
  //   await RequireAllCars()
  // }
  // t()},[focoused])



  //console.log([...carResults])
  


  //carResults.map (item => console.log({...item}))
 

  
  

  return(

    <SafeAreaView style={{backgroundColor: Colors.darker, marginBottom: 15, flex:1}}>
      
      <Header />
            
        <View  style={Styles.container}>
          <SearchBar></SearchBar>

          
          <View style={{height:'20%'}}/>
         
          
          {loading? <ActivityIndicator size={'large'} color='#ffc7d2'/>:
          <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>RequireAllCars()} >
          <View style={[Styles.button, {shadowOffset:{width: 40, height: 40}, elevation:40}]}>
            <Text style={{color: '#4c3c3f', fontSize:20, fontWeight:'bold'}} >Ver Todos</Text>
          </View>
        </TouchableOpacity>} 
          
          <Modal animationType='fade' visible={loaded} transparent={true} onRequestClose={()=>setLoaded(false)}>
            <View style={[Styles.container,{flex:0, height:'69.4%', top:'28.6%', backgroundColor:'black'}]}>

            <Text style={[Styles.baseText, {letterSpacing: 3, margin: "3%"}]}> Título    :   Marca     :  Preço     :   Ano </Text>
              <FlatList 
              contentContainerStyle={{marginVertical: 0}}
              data={cars}
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

  const [title, setTitle] = useState(props.car.title)
  const [brand, setBrand] = useState(props.car.brand)
  const [price, setPrice] = useState(props.car.price)
  const [age, setAge] = useState(props.car.age)



  return(

    <TouchableOpacity style={[Styles.touchableCar, {flex:1, flexDirection:'row'}]}>
      <Text style={[Styles.baseText, {letterSpacing: 2, width:"25%", marginStart:"5%"}]}>{title}  </Text>
      <Text style={[Styles.baseText, {letterSpacing: 2, width:"25%"}]}>{brand}  </Text>
      <Text style={[Styles.baseText, {letterSpacing: 2, width:"25%"}]}>{price}  </Text>
      <Text style={[Styles.baseText, {letterSpacing: 2, width:"25%"}]}>{age}</Text>

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