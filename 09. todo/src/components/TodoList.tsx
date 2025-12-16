import TodoListEmpty from "./TodoListEmpty"
import TodoListItem from "./TodoListItem"

export default function TodoList({ 
    todos,
    toggleTodo,
    deleteTodo,
    modifyTodo
}: {
    todos: Todo[];
    toggleTodo: (id: number) => void,
    deleteTodo: (id: number) => void
    modifyTodo: (id: number, title: string) => void
}) {
    return (
        <ul className="todo__list">

            {/* 할 일 목록이 없을 때 */}
            {todos.length === 0 && <TodoListEmpty />}
            
            {/* 할 일 목록이 있을 때 */}
            {todos.length > 0 && 
                todos.map(
                    (todo) => <TodoListItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} modifyTodo={modifyTodo} />
                    // 체크박스를 클릭하는 실제 동작이 일어나는 TodoListItem 컴포넌트에 toggleTodo() 함수를 다시 전달
                )
            }
            
        </ul>
    )
}