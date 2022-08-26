const initialState = { users : [] , activeUser : []}

const saveUP = (state = initialState , action) => {
    switch(action.type){
        
        case "saveUP" :
        return {...state , users : [...state.users , action.data]};

        case "logIn" :
            return{ ...state , activeUser : action.data}
        
        case "signOut" : 
             return{...state , activeUser : null}    

        default :
        return state
    }
}
export default saveUP ;