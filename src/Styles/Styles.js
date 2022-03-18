import React from "react";
import {StyleSheet} from 'react-native'
import { Colors } from "react-native/Libraries/NewAppScreen";


const Styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: "#675b59"
    },

    baseText: {
        color: "#FFF"
    },

    touchable: {
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

    textInput:{
      
        borderRadius: 90, 
        margin:'4%',
        backgroundColor: '#f1f1f1',
        width: '75%',
        height: 30,
        borderColor: "#4f4745",
        borderWidth: 1,
        padding:7,
        fontSize:12,
        

    }



})

export default Styles
