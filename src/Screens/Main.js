import React, {useContext, useState, useEffect} from "react";
import {FlatList, SafeAreaView, Text, View, Image, TouchableOpacity, Modal, ImageBackground, TextInput, ActivityIndicator,
ScrollView, KeyboardAvoidingView, Linking} from 'react-native';
import { Colors, Header } from "react-native/Libraries/NewAppScreen";
import Styles from "../Styles/Styles";
import { GlobalContext } from "../contexts/GlobalContext";
import { useIsFocused } from "@react-navigation/native";








export default function Main({navigation}){


  const {RequireAllCars, cars, loading, loaded, setLoaded, AddCar, setCarAdded, carAdded, Search} = useContext(GlobalContext)

  const [modalAdd, setModalAdd] = useState(false)
  const [addCar, setAddCar] = useState ([null,null,null,null])
  
  const [search, setSearch] = useState("")

 
  function callSearch(){
    Search(search)
  }
  
  

  return(

    <SafeAreaView style={{backgroundColor: Colors.darker, flex:1}}>
      
      <Header />
            
        <View  style={Styles.container}>
          <SearchBar value={search} onChangeText={text => setSearch(text)} onPress={()=>callSearch()} ></SearchBar>
         
          
          {loading? <ActivityIndicator size={'large'} color='#ffc7d2'/>:
          <View>
            <TouchableOpacity style={{alignSelf:'center', marginTop: '15%'}} onPress={()=>RequireAllCars()} >
              <View style={[Styles.button, {shadowOffset:{width: 40, height: 40}, elevation:40}]}>
                <Text style={{color: '#4c3c3f', fontSize:20, fontWeight:'bold'}} >Ver Todos</Text>
              </View>
            </TouchableOpacity>

        <TouchableOpacity style={{alignSelf:'center', marginTop: '5%'}} onPress={()=>setModalAdd(true)} >
          <View style={[Styles.button, {shadowOffset:{width: 40, height: 40}, elevation:40}]}>
            <Text style={{color: '#4c3c3f', fontSize:20, fontWeight:'bold'}} >Adicionar</Text>
          </View>
        </TouchableOpacity>
          </View>} 
          
          {/* Lista de carros */}
          <Modal animationType='slide' visible={loaded} transparent={true} onRequestClose={()=>setLoaded(false)}>
            <View style={[Styles.container,{flex:0, height:'72%', top:'28.6%', backgroundColor:'#675b59'}]}>

            <Text style={[Styles.baseText, {letterSpacing: 3, margin: "2.5%", width:'100%', height:30, maxHeight:30}]}> Título  :   Marca   :  Preço   :  Ano </Text>
              
              <FlatList 
              contentContainerStyle={{marginVertical: 0}}
              data={cars}
              keyExtractor={item => String(item._id)}
              renderItem={({item}) => <Cars car={item}/>}>
              </FlatList>

            </View>
          </Modal>

          {/* Adicionar carro */}
          <Modal animationType='slide' visible={modalAdd} transparent={true} onRequestClose={()=>setModalAdd(false)}>
            <View style={[Styles.container,{flex:0, height:'72%', top:'28.6%', backgroundColor:'#675b59'}]}>

            {/* <Text style={[Styles.baseText, {letterSpacing: 3, margin: "3%"}]}> Título    :   Marca     :  Preço     :   Ano </Text> */}

            <Text style={[Styles.baseText, {alignSelf:'center', margin:'2%', fontWeight:'bold', letterSpacing: 3, fontSize:20,
            shadowColor:'black', shadowOffset:{width:10, height:10}, elevation:10}]}>
              Adiconar Carro</Text>
            
            <ScrollView>
              <KeyboardAvoidingView>
            
              <FormItemHorizontal title="Nome" textExample = "Ex: Fusca" value ={addCar[0]} 
              onChangeText = {(text)=>setAddCar([text, addCar[1], addCar[2], addCar[3]])}/>

              <FormItemHorizontal title="Marca" textExample = "Ex: Volkswagen" value ={addCar[1]}
              onChangeText = {(text)=>setAddCar([addCar[0], text, addCar[2], addCar[3]])}/>

              <FormItemHorizontal title="Preço" textExample = "Ex: 5000" value ={addCar[2]}
              onChangeText = {(text)=>setAddCar([addCar[0], addCar[1], text, addCar[3]])}/>

              <FormItemHorizontal title="Ano" textExample = "Ex: 1998" value ={addCar[3]}
              onChangeText = {(text)=>setAddCar([addCar[0], addCar[1], addCar[2], text])}/>

              <TouchableOpacity style={{alignSelf:'center', marginTop: '2%'}} 
              onPress={()=>{AddCar(addCar[0], addCar[1], addCar[2], addCar[3])
              }} >
                <View style={[Styles.button, {shadowOffset:{width: 20, height: 20}, elevation:40, width: 110, }]}>
                  <Text style={{color: '#4c3c3f', fontSize:20, fontWeight:'bold'}} >Adicionar</Text>
                </View>
              </TouchableOpacity>  


              

              <Modal animationType='slide' visible={carAdded} transparent={true} 
              onRequestClose={()=> {setCarAdded(false), setModalAdd(false), setAddCar([null, null, null, null])}}>
                <View style={{flex:1, backgroundColor:'rgba(0,0,0,0.5)'}} >
                  <View style={[Styles.container, {flex:0, height: '20%', top:'50%', borderRadius:90, borderWidth:4, 
                  borderColor:'#ffc7d2', width:'110%', alignSelf:'center', flexDirection:'column', 
                  justifyContent:'center', alignItems:'center'}]}>
                    <Text style={[Styles.baseText, {fontWeight: 'bold', letterSpacing:3, fontSize:40,
                    shadowOffset:{width:5, height:5}, elevation:5}]}>Carro Adicionado</Text>

                  </View>
                </View>       
              </Modal>
            
              </KeyboardAvoidingView>
              </ScrollView>
            </View>
          </Modal>
        </View>
    </SafeAreaView>
     )
}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function Cars(props){

  const id = props.car._id
  const [title, setTitle] = useState(props.car.title)
  const [brand, setBrand] = useState(props.car.brand)
  const [price, setPrice] = useState(props.car.price)
  const [age, setAge] = useState(props.car.age.toString())

  const [modal, setModal] = useState (false)
  const [altModal, setAltModal] = useState (false)
  const [confirm, setConfirm] = useState(false)


  const {DeleteCar, loaded, setLoaded, loading, setLoading, carDeleted, carAlt, setCarAlt, AltCar} = useContext(GlobalContext)

  function VerifyFields(){

    if (title.length < 1)
      setTitle(props.title)
    if (brand.length < 1)
      setBrand(props.brand)
    if (price.length < 1)
      setPrice(props.price)
    if (age.length < 1)
      setAge(props.age)

    AltCar(id, title, brand, price, age)

  }

 




  return(

    <TouchableOpacity style={[Styles.touchableCar, {flex:1, flexDirection:'row'}]} onPress={()=>setModal(true)}>
      <Text style={[Styles.baseText, {letterSpacing: 2, width:"25%", marginStart:"5%"}]}>{title}  </Text>
      <Text style={[Styles.baseText, {letterSpacing: 2, width:"25%"}]}>{brand}  </Text>
      <Text style={[Styles.baseText, {letterSpacing: 2, width:"25%"}]}>{price}  </Text>
      <Text style={[Styles.baseText, {letterSpacing: 2, width:"25%"}]}>{age}</Text>

      <Modal animationType='slide' visible={modal} transparent={true} 
      onRequestClose={()=>{setModal(false)
      setConfirm(false)}}>
        <View style={[Styles.container,{justifyContent:'center', alignItems:'center'}]}>

        {/* Excluir carro */}
        {confirm?
        <View style={{justifyContent:'center', alignItems:'center'}}>  
          <Text style={{color: 'white', fontSize:20, fontWeight:'bold'}} >Tem certeza?</Text>
          <View style={{flexDirection:'row', justifyContent:'center'}}>

           <TouchableOpacity style={{ margin:'5%', alignSelf:'center'}} onPress={()=>DeleteCar(id)}>
            <Text style={{color: 'white', fontSize:20, fontWeight:'bold'}} >Sim</Text>
           </TouchableOpacity>
           <TouchableOpacity style={{ margin:'5%', alignSelf:'center'}} onPress={()=>setConfirm(false)}>
            <Text style={{color: 'white', fontSize:20, fontWeight:'bold'}} >Não</Text>
           </TouchableOpacity>

          </View>
        </View>
        : 
        
        <TouchableOpacity style={{alignSelf:'center', marginTop: '15%'}} onPress={()=>setConfirm(true)} >
          <View style={[Styles.button, {shadowOffset:{width: 40, height: 40}, elevation:40}]}>
            <Text style={{color: '#4c3c3f', fontSize:20, fontWeight:'bold'}} >Excluir carro</Text>
          </View>
        </TouchableOpacity>}

        <TouchableOpacity style={{alignSelf:'center', marginTop: '5%'}} onPress={()=>setAltModal(true)} >
          <View style={[Styles.button, {shadowOffset:{width: 40, height: 40}, elevation:40}]}>
            <Text style={{color: '#4c3c3f', fontSize:20, fontWeight:'bold'}} >Alterar</Text>
          </View>
        </TouchableOpacity>

        {/* Alterar carro */}
        <Modal animationType='slide' visible={altModal} transparent={true} 
        onRequestClose={()=>{
          setAltModal(false)
          setCarAlt(false)
          setLoading(null)}}>
          <View style={[Styles.container,{flex:0, height:'100%', backgroundColor:'#675b59'}]}>


            <Text style={[Styles.baseText, {alignSelf:'center', margin:'10%', fontWeight:'bold', letterSpacing: 3, fontSize:20,
            shadowColor:'black', shadowOffset:{width:10, height:10}, elevation:10}]}>
              Alterar Carro</Text>
            
            <ScrollView>
              <KeyboardAvoidingView>
            
                <FormItemHorizontal title="Nome" textExample = "Ex: Fusca" value ={title} 
                onChangeText = {(text)=>setTitle(text)}/>

                <FormItemHorizontal title="Marca" textExample = "Ex: Volkswagen" value ={brand}
                onChangeText = {(text)=>setBrand(text)}/>

                <FormItemHorizontal title="Preço" textExample = "Ex: 5000" value ={price}
                onChangeText = {(text)=>setPrice(text)}/>

                <FormItemHorizontal title="Ano" textExample = "Ex: 1998" value ={age}
                onChangeText = {(text)=>setAge(text)}/>

                {loading? <ActivityIndicator style={{margin:'10%'}} size={'large'} color='#ffc7d2'/>:
                 carAlt? <Text style={{color: 'white', fontSize:20, fontWeight:'bold', margin:'10%', alignSelf:'center'}} >
                   Carro Alterado</Text>:
                 <TouchableOpacity style={{alignSelf:'center', marginTop: '2%'}} 
                onPress={()=>{VerifyFields()}} >
                  <View style={[Styles.button, {shadowOffset:{width: 20, height: 20}, elevation:40, width: 110, }]}>
                    <Text style={{color: '#4c3c3f', fontSize:20, fontWeight:'bold'}} >Alterar</Text>
                  </View>
                </TouchableOpacity>   }           
              </KeyboardAvoidingView>
            </ScrollView>
            </View>
        </Modal>


       

        <TouchableOpacity style={{alignSelf:'center', marginTop: '5%'}} onPress={()=> Linking.openURL('https://www.google.com/search?q=carro+' + brand + '+' + title + '+' + 'preço' + '+' + price + '+' + 'ano' + '+' + age )} >
          <View style={[Styles.button, {shadowOffset:{width: 40, height: 40}, elevation:40}]}>
            <Text style={{color: '#4c3c3f', fontSize:20, fontWeight:'bold'}} >Pesquisar</Text>
          </View>
        </TouchableOpacity>

        {loading?<ActivityIndicator style={{margin:'10%'}} size={'large'} color='#ffc7d2'/>:null}
        {loading === false? <Text style={{color: 'white', fontSize:20, fontWeight:'bold', margin:'10%'}} >Carro Excluído</Text>:null}
        {loaded === false? setModal(loaded):null}
      
        </View>
      </Modal>
    </TouchableOpacity>



  )
}

function SearchBar(props){
  

  return(
    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
      <TextInput value={props.value} onChangeText={props.onChangeText} style={Styles.textSearchInput} 
      placeholderTextColor={'#8e8e8e'} placeholder={"Digite o nome, marca, preço ou ano do carro"}/>
      <TouchableOpacity onPress={props.onPress}>
        <Image source = {require("../Assets/Images/searchIcon.png")} resizeMode={'contain'} style={{width:40, marginTop:'30%', marginEnd:'1%'}}/>
      </TouchableOpacity>
      
    </View>
  )
}


function FormItemHorizontal(props){

  const [itemTitle, setItemTitle] = useState(props.title)

  return(
    <View>
      <Text style={[Styles.baseText, {fontWeight:'bold', fontSize: 20, margin:'3%'}]}> {itemTitle}</Text>      
      <TextInput value={props.value} onChangeText={props.onChangeText} style={Styles.textInput} placeholderTextColor={'#8e8e8e'} placeholder={props.textExample}/>
    </View>
  )


}