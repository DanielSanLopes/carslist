import React from "react";
import {StyleSheet} from 'react-native'
import { Colors } from "react-native/Libraries/NewAppScreen";


const Styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: "#675b59",
        
    },

    baseText: {
        color: "#FFF"
    },

    touchableCar: {
        height: 50,
        width: '100%',
        borderTopWidth: 1,
        borderColor: '#4f4745',
    },

    inputArea:{
        height: 50,
        width: '100%',
        borderTopWidth: 0,
        borderColor: '#4f4745',
    },

    textSearchInput:{
      
        borderRadius: 90, 
        margin:'4%',
        backgroundColor: '#f1f1f1',
        width: '75%',
        height: 40,
        borderColor: "#4f4745",
        borderWidth: 2,
        padding:12,
        fontSize:12,
        letterSpacing:1
    },

    textInput:{

        borderRadius: 90,
        width: '40%',
        height: 40, 
        backgroundColor: '#f1f1f1',
        margin:'2%',
        marginTop:0,
        letterSpacing:0.5,
        fontSize:15,
        padding: 10

    },

    button:{
        width: 150,
        height: 60,
        backgroundColor: '#ffc7d2',
        borderRadius:180,
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'#000',
               

    }



})

export default Styles
