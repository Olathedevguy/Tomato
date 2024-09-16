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


    const getTotalCartAmount = ()=>{
        let totalAmount = 0
        for(const item in cartItems){
            //bc the cart items is an object, this for-in loop will iterate over that object and provide the items 1 by 1
            if(cartItems[item]>0){
            let itemInfo = food_list.find((product)=>product._id === item)//if prod id is matching with the item, it means the product is available in cart
            totalAmount += itemInfo.price*cartItems[item];
            }
        }
        return totalAmount;
    }

    // useEffect(()=>{
    //     console.log(cartItems);
    // },[cartItems])

    const contextValue ={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
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