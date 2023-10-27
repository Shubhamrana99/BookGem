export const initialCategoriesReducer={
    categoriesList:[]
};

export const categoriesReducer=(state,{type,payload})=>{
    switch (type) {
        case "DISPLAY_CATEGORIESLIST":
            return{...state,categoriesList:payload}
            
    
        default:
            return state;
    }
}