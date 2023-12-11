import { createContext } from "react";

// import axios from "axios";

export const CartContext=createContext();

export const CartProvider=({children})=>{

    // const handleAddTocart= async (bookForCart)=>{
    //     try {
    //         const {status,data}=await axios.post("/api/user/cart",{product})
    //     } catch (error) {
            
    //     }
    // }

    return(
        <CartContext.Provider value={{}}>{children}</CartContext.Provider>
    )
}