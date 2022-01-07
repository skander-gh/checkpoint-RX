
import './App.css';
import Addtask from './component/Addtask';
import ListTask from './component/ListTask';

function App() {
  return (
    <div className="App">
     <h1>redux</h1>
     <Addtask></Addtask>
     <ListTask></ListTask>
    </div>
  );
}

export default App;
