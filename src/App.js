import './index.css';
import Title from './components/Header';
import Addtodo from './components/Addtodo';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  const [taskList,setTaskList] = useState([]);

  const updateTaskList = (event) => {
    if(event.target.value !== ''){
      setTaskList([...taskList,{id: taskList.length, payload: event.target.value}])
      event.target.value = '';
    }
  }

  return (
    <>
      {/* <h1>task list</h1> */}
      <Title>task list</Title>
      <Addtodo updateTaskList={updateTaskList}/>
      {taskList.length === 0? "you have no tasks" : <ul>{taskList.map(task => {
        return <TodoList task = {task} key = {task.id}/>
      })}</ul>}
      
    </>
  );
}

export default App;
