const initialState = {data : []} ;

const todo = (state = initialState , action ) => {
    switch(action.type){

        case "addTodo" :
            if(action.data.desc === ""){return alert("Can Add Empty Todo")}
            let length = state.data.length;
            action.data.id = length+1;
            return {...state , data : [...state.data , action.data]};
        
        case "deleteTodo" :
            state.data = state.data.filter(d=>d.id !== action.data)
            return {...state, data : [...state.data]};  

        case "complete" :
            const complete = state.data.map(d=>{if(d.id===action.data.id){return{...d , category : true}} return d})
            return {...state, data : complete};               
            
        default :
            return state
    }
}
export default todo;