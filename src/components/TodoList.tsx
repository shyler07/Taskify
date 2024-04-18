import { Droppable } from "react-beautiful-dnd";
import SingleTodo from "./SingleTodo";

type Props = {
// interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    completedTodos: Todo[]
    setCompletedTodos:React.Dispatch<React.SetStateAction<Todo[]>>
  
}

const TodoList = ({todos, setTodos, completedTodos ,setCompletedTodos} : Props)  => {
    return (
        <div className=" container-todos">
          <Droppable droppableId="TodoList">
            {(provided) => (
                  // start
                  <div className="todos-task" 
                      ref={provided.innerRef}
                      {...provided.droppableProps}>

                <span className="todos-span-header">
                  Active Task
                </span>
                {/* {todos.map(todo=>( */}

                  {/* use only when not using draggable library */}
                  {/* {todos.slice().reverse().map((todo, index) =>( */} 

                  {todos.map((todo, index)=>(
                 <SingleTodo 
                    key={todo.id}
                    todo={todo}
                    todos={todos} 
                    setTodos = {setTodos}
                    index={index}     
                            
                />
                   ))}
                {provided.placeholder}
            </div>
                  // end
              )
            }
      
          </Droppable>
           
          <Droppable droppableId="TodosComplete">
          {(provided) => (
            //start
            <div className="todos-task-complete" 
                  ref={provided.innerRef}
                  {...provided.droppableProps}>

            <span className="todos-span-header">
              Completed Task
            </span>

               {/* {todos.map(todo=>( */}

                {/* use only when not using draggable library */}
               {/* {completedTodos.slice().reverse().map((todo, index) =>( */}
               
               {completedTodos.map((todo, index)=>(
                 <SingleTodo 
                 key={todo.id}
                 todo={todo}
                 // todos={todos} 
                 // setTodos = {setTodos}     
                   todos={completedTodos} 
                   setTodos = {setCompletedTodos}   
                   index={index}                 
                />
              ))}
               {provided.placeholder}
            </div>
            // end
          )} 

            </Droppable>
      </div>

      // <div className="todos">
      //  {todos.map(todo=>(
      //     <SingleTodo key={todo.id} 
      //                 todo={todo}
      //                 todos={todos}
      //                 setTodos = {setTodos}
                       
      //                 />
      //  ))}
      // </div>
    )
  }
  
export default TodoList
