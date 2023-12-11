import { createContext, useEffect, useReducer } from "react"

import { getCategoryService } from "../services/categories_services/getCategoryService";
import { categoriesReducer, initialCategoriesReducer } from "../reducer/categoriesReducer";


export const CategoryContext=createContext();

export const CategoryProvider=({children})=>{

    const [categoriesState,categoriesDispatch]=useReducer(categoriesReducer,initialCategoriesReducer)

    
   

    const getCategory=async()=>{
        try {
            // const response = await getCategoryService()
            // const {status, data: {categories}} = response
            const {status,data:{categories}}= await getCategoryService();
            if(status===200){
                categoriesDispatch({type:"DISPLAY_CATEGORIESLIST",payload:categories})
            }
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(()=>{
        getCategory()
    },[])

    return<CategoryContext.Provider value={{categoriesState}} >{children}</CategoryContext.Provider>
}