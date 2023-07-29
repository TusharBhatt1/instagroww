import { useEffect, useState } from "react"


export function useLocalStorage(key,initialValue) {


    const [value , setValue] = useState(()=>{

     if(typeof window!=="undefined")
     {
        let updatedValue = localStorage.getItem("key")
        if (updatedValue) return JSON.parse(updatedValue)
        return initialValue
     }
    })
    useEffect(()=>{
        if(typeof window!=="undefined")
        {
        localStorage.setItem(key, JSON.stringify(value))
        }
    },[value,key])

  return [value,setValue]
}
