import './App.css'

import TodoHeader from './components/TodoHeader'
import TodoEdior from './components/TodoEditor'
import TodoList from './components/TodoList'

export default function App() {

  return (
    <>
      <div className="todo">
        <TodoHeader />

        {/* 할 일 등록 */}
        <TodoEdior />

        {/* 할 일 목록 */}
        <TodoList />
      </div>
    </>
  )
}