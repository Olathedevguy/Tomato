import { createContext } from "react";
import { food_list } from "../assets/assets";
export const StoredContext = createContext(null)

const StoredContextProvider = (props) => {
    

    const contextValue ={
        food_list
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