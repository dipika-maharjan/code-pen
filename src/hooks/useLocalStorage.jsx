import React, { useEffect, useState } from 'react'

const PREFIX = 'codepen-clone-' //helps avoid key conflicts by namespacing your stored items.

export default function useLocalStorage(key, initialValue) { //key=key to use in local storage and initialValue= the value to use if nothing is found in localStorage yet
    const preFixedKey = PREFIX + key; //Combines the PREFIX and the passed key to form a namespaced key string preFixedKey

    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(preFixedKey) //to get the stored string value from localStorage using the prefixed key

        if(jsonValue != null){ 
            return JSON.parse(jsonValue) //If a stored value exists, parse it from JSON and use it as the initial state.
        }else if (typeof initialValue === 'function'){ 
            return initialValue()      //If no stored value, but initialValue is a function, call it and use its return as the initial state.
        }else{
            return initialValue       //Otherwise, use initialValue directly as the initial state.
        }
    })

    useEffect(() => {             //useEffect runs this function whenever preFixedKey or value changes.
        localStorage.setItem(preFixedKey, JSON.stringify(value))     //JSON.stringify(value) converts the JavaScript value into a JSON string so it can be stored in localStorage (which only stores strings).
    }, [preFixedKey, value])

    return[value, setValue];         //Returns the current value and the setValue function (to update the value)
}
