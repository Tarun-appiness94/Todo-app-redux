const initialState = {
    data:[],
}
const todoReducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD_TODO":
        return{
            ...state, 
            data: [
                ...state.data, 
                {message: action.payload.message, 
                id: action.payload.id}
            ]
        
        };

        case "DELETE_TODO":
        const updatedlistData = state.data.filter(todo=> todo.id !== action.payload.id);
        return{
            ...state, 
            data: updatedlistData
         };

        default:
        return state;
    }

}

export default todoReducer;