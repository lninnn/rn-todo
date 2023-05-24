import { useSelector} from "react-redux"
import store from "../store"

export const AddTodo = (item) => {
    // const state = store.getState()
    // console.log(`reached ${state}`)
    return{
      type: 'ADD_TODO',
      payload: item
    }
}
export const DelTodo=(id) =>{
    const state1 = store.getState()
    console.log(state1.todo.todos)
    return{
        type : 'DELETE_TODO',
        payload: id
    }
}
    
export const CheckTodo = (item) =>{
    return{
        type: 'CHECK_TODO',
        payload: item
    }
}

export const Getter = () =>{
    const state = store.getState()
    return {state}
}