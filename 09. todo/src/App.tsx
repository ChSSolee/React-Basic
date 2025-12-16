import './App.css';

import { useState } from 'react';

import TodoHeader from './components/TodoHeader';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';

export default function App() {

  const [todos, setTodos] = useState<Todo[]>([]); // todos 상태 정의

  // 할 일 추가 함수
  const addTodo = (title:string) => {
    setTodos((todos) => [
      ...todos,
      {
        id: new Date().getTime(), // 고유 ID
        title,
        done:false
      },
      
    ])
  };

  const toggleTodo = (id:number) => {
    setTodos(
      (todos) => todos.map(
        (todo) => todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  const deleteTodo = (id: number) => {
    setTodos(
        (todos) => todos.filter(
            (todo) => todo.id !== id
        )
    );
  };

  const modifyTodo = (id: number, title: string) => {
    setTodos(
      (todos) => todos.map(
        (todo) => (todo.id === id ? {...todo, title } : todo)
      )
    )
  }

  return (
    <>
      <div className="todo">
        <TodoHeader />
        
        <TodoEditor addTodo={addTodo} /> 

        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} modifyTodo={modifyTodo} />
      </div>
    </>
  )
}