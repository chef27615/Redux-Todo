import { ADD_TODOS, TOGGLE_TODOS, DELETE_TODOS } from '../action';

const initialState = {
    todos : [
        {
            value: 'Walk the dog.',
            completed: false
        }
    ]
}

function reducer( state=initialState, action ) {
    switch(action.type) {
        case ADD_TODOS:
        return {
            ...state,
            todos: [...state.todos, {
                value: action.payload,
                completed: false
                }]
        }
        
        case TOGGLE_TODOS:
        return {
            ...state,
            todos: state.todos.map((todo, index) => {
                if(index === action.payload)
                    return{...todo, completed: !todo.completed}
                
                return todo;
            })
        } 

        // case DELETE_TODOS:
        // return {
        //     ...state,
        //     todos: state.todos.filter(todo => {
        //         if(todo)
        //     })
        // }

    default:
     return state;
    }
}

export default reducer;