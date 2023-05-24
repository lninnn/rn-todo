const INITIAL_STATE = {
    todos:[]
}

export default TodoReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type){
        case 'ADD_TODO':
            return {...state,
            todos : [...state.todos, action.payload]}
        case 'DELETE_TODO':
            return {...state,
            todos : state.todos.filter(todo => todo.id !== action.payload)}
        case 'CHECK_TODO':
            return{...state,
            todos: state.todos.filter(todo => todo.id !== action.payload.id).push(action.payload)}
        default:
            return state
    }
}
