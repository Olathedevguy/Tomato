import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoredContext = createContext(null)

const StoredContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState(0)

    // eslint-disable-next-line no-unused-vars
    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
          setCartItems((prev)=>({...prev,[itemId]:1}))  //if theres nothing in the cart when anything is added the value is 1
        }else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1})) //if there is something already in the cart, just add 1
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const contextValue ={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
    }

    

    return(
        <StoredContext.Provider value={contextValue} >
            {
                props.children
            }
        </StoredContext.Provider>
    )
}

export default StoredContextProvider