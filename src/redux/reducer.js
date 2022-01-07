
import { ADD_TODO } from "./types";


const initialState = {
    todo_list: [{id:0, Description:"sleep", Done:false },{id:1, Description:"work", Done:false }, {id:2, Description:"sleep again", Done:false } ]
  };
  
  function todos_reducer(state = initialState, action) {
    switch (action.type) { 
      case ADD_TODO : 
        return { ...state, todo_list: [ ...state.todo_list, action.content] }
       default:return state  

    }
}
export default todos_reducer