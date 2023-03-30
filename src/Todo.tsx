import React, { useState } from "react"

interface Todo{
    id: number;
    work:string;
    isDone: boolean;
    createdDate: string;
}

const initialTodos: Todo[] = [
    {
        id: 1,
        work: "Todo 1",
        isDone: false,
        createdDate: new Date().toDateString()
    }
]

const Todo = ()=>{
    const [todos, setTodos] = useState(initialTodos);
    const [work, setWork] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        const newTodo: Todo = {
            id: todos.length + 1,
            work,
            isDone: false,
            createdDate: new Date().toDateString()
        };

        setTodos([...todos, newTodo]);
        setWork("");
    }

    return(
        <>
          <h1>Todo List</h1> 
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Add Todo
            <input 
                type="text"
                value={work}
                onChange={(e)=> setWork(e.target.value)}/>
            </label>
            <button type="submit">Add</button>
          </form>
          <ul>
            {todos.map((val,index)=> {
                return <li key={index}>{val.work}</li>
            })}
          </ul>
        </>
    )
}

export default Todo;