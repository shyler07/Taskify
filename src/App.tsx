// import DataTypes from "./components/DataTypes"
import { useState } from "react"
import InputField from "./components/InputField"
import TodoList from "./components/TodoList"
// import {Todo} from "./components/ModelTodo"
import { DragDropContext,DropResult } from "react-beautiful-dnd"

function App() {

  const [todo, setTodo] = useState <string | number> ("")
  console.log(todo)

  //create array a type or interfaces
  const [todos, setTodos] = useState <Todo[]> ([])
  const [completedTodos, setCompletedTodos] =useState <Todo[]>([])

  const handleSubmit = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
    setTodo("");
  };
  console.log(todos)

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    
    if (!destination) 
      return;
  
    if (destination.droppableId === source.droppableId && destination.index === source.index) 
      return;
  // Create copies to avoid mutating state directly
    let active = [...todos]; 
    let complete = [...completedTodos];
  
    const draggedTask = source.droppableId === 'TodoList' ? active[source.index] : complete[source.index];
  
    if (source.droppableId === 'TodoList') {
      active.splice(source.index, 1);
    } else {
      complete.splice(source.index, 1);
    }
  
    if (destination.droppableId === 'TodoList') {
      active.splice(destination.index, 0, draggedTask);
    } else {
      complete.splice(destination.index, 0, draggedTask);
    }
  
    setCompletedTodos(complete);
    setTodos(active);
  };
  return (
 
    <DragDropContext onDragEnd={onDragEnd}>
  
      <div className="App">
        {/* <DataTypes/> */}
       <span className="heading">Taskify</span>
       <InputField todo={todo} 
           setTodo = {setTodo}
           handleSubmit = {handleSubmit}/>

       <TodoList todos={todos} 
       setTodos = {setTodos} 
       completedTodos={completedTodos}
       setCompletedTodos = {setCompletedTodos} />
      </div>
      </DragDropContext>
   
  )

}

export default App
