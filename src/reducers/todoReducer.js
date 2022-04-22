const initialState = {
    data:[],
    currentEditData : ""
}
const todoReducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD_TODO":
        return{
            ...state, 
            data: [
                ...state.data, 
                {id: action.payload.id,
                message: action.payload.message, 
                completed : false
                }
            ]
        };

        case "DELETE_TODO":
        const updatedlistData = state.data.filter(todo=> todo.id !== action.payload.id);
        return{
            ...state, 
            data: updatedlistData
         };


        //  case "EDIT_TODO":
        //     const editTodoData = state.data.find(todo=> {return(todo.id === action.payload.id)});
        //     return{
        //         ...state, currentEditData : editTodoData
        //      };
             
         case "COMPLETED_TODO":
            const completedData = state.data.map(todo=> {
                if(todo.id === action.payload.id && !todo.completed) {
                    return({...todo, completed: true})
                }else if(todo.id === action.payload.id && todo.completed) {
                    return({...todo, completed: false})
                }else{
                    return ({...todo})}
                }
            )

            return { 
                ...state, 
                data: completedData
             };
    
         
            return { 
                ...state, 
                data: completedData
             };
    
        default:
        return state;
    }

}

export default todoReducer;