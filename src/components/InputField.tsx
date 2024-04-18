import { useRef } from "react";

// to know the setTodo focus the cursor of setTodo in app.tsx
interface Props{
    todo: string | number;
    setTodo: React.Dispatch<React.SetStateAction<string | number>>
    handleSubmit: (newTodo: Todo) => void;
}



const InputField = ({ todo, setTodo, handleSubmit }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todo) {
      handleSubmit({ id: Date.now(), todo: todo.toString(), isDone: false });
      setTodo("");
      inputRef.current?.blur();
  
        // inputRef.current?.focus();
     
    
    }

    
  };
  
  return (
    <form className='inputField' 
          onSubmit={handleFormSubmit}>

        <input className="inputBox"
        type="input"
        placeholder='Enter Task'
        autoFocus
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        ref = {inputRef}
         />
        <button className="inputBtn-submit"
            type="submit">
        GO</button>
    </form>
  )
}

export default InputField
