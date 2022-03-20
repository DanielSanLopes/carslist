import React, {useContext, createContext, useState, useEffect} from "react"
import {View} from "react-native"



export const GlobalContext = createContext({})

export default function GlobalProvider ({children}){

    const baseUrl = "http://api-test.bhut.com.br:3000/api/cars"
    const [loading, setLoading] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [cars, setCars] = useState([])
    //var carResults = []

    async function RequireAllCars(){

        setLoading(true)

        let response = await fetch (baseUrl, {
            METHOD: 'GET',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).catch((error)=>console.error("RequireAllCars Error: " + error))

        if (response){
            var  res = await response.json()    
            
            //res.map (item => console.log({...item}))   
            //setCarResults(res)
            console.log("Runned")
            setCars([...res])
            
           
            // for (let i = 0; i < cars.length; i++){
            //     let id = null

            // }
            //console.log(...cars[0])

            setLoading(false)
            setLoaded(true)
             
        }     
        
        
        

        

    }

    

    return(
        <GlobalContext.Provider value={{RequireAllCars, cars, loading, loaded, setLoaded}}>
            {children}
        </GlobalContext.Provider>
    )
}