
import { useEffect, useRef, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { MdDeleteForever,MdFileDownloadDone, MdModeEdit } from "react-icons/md";

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    index:number;
}

const SingleTodo = ({todo, todos, setTodos, index} : Props) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)
    const inputRef = useRef<HTMLInputElement>(null)

  //complete true or false
const handleDone = (id:number)=>{
  setTodos(
    todos.map((todo)=>
      todo.id === id ? {...todo, isDone: !todo.isDone} : todo 
      )
    );
}
 //Delete
const handleDelete = (id:number)=>{
  setTodos(
    todos.filter(( todo )=> todo.id !== id )
    );
}

const handleEdit = (e:React.FormEvent, id: number) => {
  e.preventDefault()
  setTodos(
    todos.map((todo) => 
      todo.id === id ? {...todo, todo:editTodo}:todo)
    );
  setEdit(false)
  
}


// autofocus in input when Edit Button Click
  useEffect(() => {
    if (edit && inputRef.current){
      inputRef.current.focus()
    }
  }, [edit])

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) =>(

  
    <form action="" 
          className="todos-single" 
          onSubmit={(e)=>handleEdit(e,todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
    >
      { edit?(
          <input 
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            className="todos-edit"
            ref={inputRef}
          />
          
        ): todo.isDone ?(
          <s className="todos-single-text"> {todo.todo}</s>
        ):(
          <span className="todos-single-text"> {todo.todo}</span>
          
        )}

        <div className="icon-container">
        
            <span className="icon" 
                  onClick={()=>handleDone(todo.id)}> 
                  <MdFileDownloadDone/>
            </span>

            <span className="icon" 
                  onClick={() => setEdit(!edit)}>
                  <MdModeEdit />
        </span>

            <span className="icon" 
                  onClick={()=>handleDelete(todo.id)}>
                  <MdDeleteForever/> 
            </span>
        </div>
    </form>
        )}
    </Draggable>
  )
}

export default SingleTodo
