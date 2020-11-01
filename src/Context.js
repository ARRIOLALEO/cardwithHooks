import React, {useState, useEffect} from "react"
const Context = React.createContext()
function ContextProvider({children}){
    const [allPhotos,setPhotos]= useState([])
    const getData = async () =>{
        const AllData= await fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        const response = await AllData.json()
        setPhotos(response)
    }
        useEffect(()=>{
          getData()
        },[])
        return (<Context.Provider value={{allPhotos}}>
                {children}
            </Context.Provider>)
        }
export {ContextProvider,Context}
