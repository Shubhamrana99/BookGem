export const intialAuth={
    isLoggedIn:false ,
}

export const authReducer=(state,{type,payload})=>{
    switch (type) {
        case "HANDLE_SIGNIN":
           return {
            ...state,
            isLoggedIn:payload
        } ;

        case "HANDLE_SIGNOUT":
            return {
                ...state,
                isLoggedIn:payload
            }
    
        default:
            return state;
    }
}




