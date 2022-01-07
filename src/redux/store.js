import {createStore} from 'redux'
import todos_reducer from './reducer'



const store= createStore(todos_reducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store