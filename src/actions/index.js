const ADD_TODO = "ADD_TODO";
export const addTodo = (message) =>{
    return {
        type : ADD_TODO,
        payload:{
            id: new Date().getTime(),
            message: message,
            completed : false
        }
    }
} 

const DELETE_TODO = "DELETE_TODO";
export const deleteTodo = (id) =>{
    return {
        type : DELETE_TODO,
        payload:{id: id}
    }
}


const COMPLETED_TODO = "COMPLETED_TODO";
export const completedTodo = (id) =>{
    return {
        type : COMPLETED_TODO,
        payload:{id: id}
    }
}

const FILTER_ALL_TODO = "FILTER_ALL_TODO";
export const filterAllTodo = () =>{
    return {
        type : FILTER_ALL_TODO
    }
}

const FILTER_ACTIVE_TODO = "FILTER_ACTIVE_TODO";
export const filterActiveTodo = () =>{
    return {
        type : FILTER_ACTIVE_TODO,
    }
}


const FILTER_COMPLETED_TODO = "FILTER_COMPLETED_TODO";
export const filterCompletedTodo = () =>{
    return {
        type : FILTER_COMPLETED_TODO,
    }
}











// const EDIT_TODO = "EDIT_TODO";
// export const editTodo = (id, message) =>{
//     return {
//         type : EDIT_TODO,
//         payload:{id: id,
//             message: message
//         }
//     }
// }