export const ADD_TODOS = 'ADD_TODOS';
export const TOGGLE_TODOS = 'TOGGLE_TODOS';
export const DELETE_TODOS = 'DELETE_TODOS';


export function addTodos(newTodo){
    return{
        type: ADD_TODOS,
        payload: newTodo
    }
}

export function toggleTodos(index){
    return{
        type: TOGGLE_TODOS,
        payload: index
    }
}

// export function deleteTodos(index){
//     return{
//         type: DELETE_TODOS,
//         payload: index
//     }
// }