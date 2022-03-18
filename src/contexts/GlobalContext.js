import React, {useContext, createContext, useState, useEffect} from "react"
import {View} from "react-native"



export const GlobalContext = createContext({})

export default function GlobalProvider ({children}){

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
            let res = await response.json()
            var cars = [...res]
            console.log ("Result " + cars)
        }


    }

    return(
        <GlobalContext.Provider value={{RequireAllCars}}>
            {children}
        </GlobalContext.Provider>
    )
}