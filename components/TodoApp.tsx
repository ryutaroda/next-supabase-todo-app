import React, { useEffect, useState } from 'react'
import { getAllTodos, createTodo, deleteTodo } from "../utils/supabaseFunction";
import {supabase} from "../utils/supabase";

const TodoApp = () => {
  const [todos, setTodos] = useState<[]>([]);
  const [title, setTitle] = useState<string>('');

  const fetchUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    console.log(user)
  }

  useEffect(() => {
    const getTodos = async () => {
      const todos:any = await getAllTodos();
      setTodos(todos);
      console.log(todos)
    }
    getTodos();
    fetchUser();
  }, []);

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title === '') return;
    await createTodo(title);
    const todos:any = await getAllTodos();
    setTodos(todos);
    setTitle('');
  }

  const handleDelete = async (id: number) => {
    let answer = confirm('削除しますか？');
    if (!answer) return;
    await deleteTodo(id);
    const todos:any = await getAllTodos();
    setTodos(todos);
  }

  return (
    <section className='text-center mb-2 text-2xl font-medium'>
      <h3>Supabase Todo App</h3>
      <form onClick={(e) => handleSubmit(e)}>
        <input type="text" className='shadow-lg p-i outline-none' onChange={(e) => setTitle(e.target.value)}
          value={title} />
        <button className='shadow-md border-2 px-1 py-1 rounded-lg bg-green-50'>Add</button>
      </form>
      <div>
        <ul className="mx-auto">
          {todos.map((todo, index) => (
            <div className="flex bg-orange-200 rounded-md mt-2 mb-2 p-2 justify-between" key={index}>
              <li className="font-medium">✅ {todo.title}</li>
              <span className="cursor-pointer" onClick={() => handleDelete(todo.id)}>×</span>
            </div>
          ))}
        </ul>
      </div>
    </section>
  )
};

export default TodoApp
