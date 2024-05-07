export const reducer = (state , action)=>{
    const  { type } = action ; 
    switch(type) {
        case  "CHANGE_THEME":
            return {
                ...state , 
                theme : action.theme 
            } 
        break;
        default :
        return state;
    }
}

