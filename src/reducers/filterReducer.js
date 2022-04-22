const initialState = {
    all : true,
    active : false,
    completed : false
    }


const filterReducer = (state = initialState, action) => {
    switch (action.type){
        case "FILTER_ALL_TODO":
        return{...state, all : true, active:false, completed:false };

        case "FILTER_ACTIVE_TODO":
        return{...state, all : false, active:true, completed:false };

        case "FILTER_COMPLETED_TODO":
        return{...state, all : false, active:false, completed:true };
        
        default:
        return state;
            
    }
}


export default filterReducer;
