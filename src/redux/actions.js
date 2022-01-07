import { ADD_TODO } from "./types";


export const addTodo = (content) => { 
   return {
        type: ADD_TODO,content
        
    }
}