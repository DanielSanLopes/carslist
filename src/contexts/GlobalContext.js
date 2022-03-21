import React, {useContext, createContext, useState, useEffect} from "react"
import {View} from "react-native"
import { SearchBar } from "react-native-screens"



export const GlobalContext = createContext({})

export default function GlobalProvider ({children}){

    const baseUrl = "http://api-test.bhut.com.br:3000/api/cars"
    const [loading, setLoading] = useState(null)
    const [loaded, setLoaded] = useState(false)
    const [cars, setCars] = useState([])

    const [carAdded, setCarAdded] = useState(false)
    const [carDeleted, setCarDeleted] = useState(null)
    const [carAlt, setCarAlt] = useState(false)
   


    async function AddCar(title, brand, price, age){

        setLoading(true)

        let response = await fetch (baseUrl, {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                title: title,
                brand: brand,
                price: price,
                age: age
            })
        }).catch(error => console.error ("Creation failed. Error: " + error))

        if (response){                    
            setLoading(false)
            setCarAdded(true)
            setLoading(null)
            
        }else{
            setCarAdded(false)
        }

        
    }
    
    async function DeleteCar(id){

        setLoading(true)

        let response = await fetch (baseUrl + "/" + id, {
            method: 'DELETE',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'applicaiton/json'
            }
        }).catch(error => console.error ("Car didn't deleted. Error: " + error))

        if (response){
            setLoading(false)
            let res = await response.json()
  
        }

    }

    async function AltCar (id, title, brand, price, age){
        setLoading(true)

        let response = await fetch (baseUrl + "/" + id, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                title: title,
                brand: brand,
                price: price,
                age: age,
            })
        }).catch(error => console.error("Car didn't altered. Error: " + error))

        if (response){
            let res = response.json()

            setCarAlt(true)
            setLoading(false)
        }
    }

    async function Search(search){

        setLoading(true)

        let response = await fetch (baseUrl, {
            method: 'GET',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json' 
            }
        }).catch((error)=>console.error("RequireAllCars Error: " + error))

        if (response){
            let res = await response.json()    

            let src = [...search.split(" ")]    
            
            let tempArray = []
  
            res.map(item => {
                let i
                let title = item.title.toLowerCase()
                let brand = item.brand.toLowerCase()
                let price = item.price.toLowerCase()
                let age = item.age

                
                src.map (sItem => {
                   
                    if (sItem.toLowerCase() == title || sItem.toLowerCase() == brand || sItem.toLowerCase() == price || parseInt(sItem) == age){
                        
                        tempArray.push(item)
                            
                    }

                })
    
                i++
            })
         
            setCars([...tempArray])   
        }  


       

        setLoading(false)
        setLoaded(true)
        setLoading(null)

    }

    async function RequireAllCars(){

        setLoading(true)

        let response = await fetch (baseUrl, {
            method: 'GET',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json' 
            }
        }).catch((error)=>console.error("RequireAllCars Error: " + error))

        if (response){
            let   res = await response.json()    

            setCars([...res])

            setLoading(false)
            setLoaded(true)

            setLoading(null)
             
        }         

    }

    

    

    return(
        <GlobalContext.Provider value={{RequireAllCars, cars, loading, setLoading, loaded, setLoaded, AddCar, setCarAdded, carAdded, DeleteCar,
            carDeleted, carAlt, setCarAlt, AltCar, Search}}>
            {children}
        </GlobalContext.Provider>
    )
}