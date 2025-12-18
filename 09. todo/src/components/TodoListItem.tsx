import { useState, memo } from "react";
import Input from "./html/Input";
import Checkbox from "./html/Checkbox";
import Button from "./html/Button";

import SvgPencil from "./svg/SvgPencil";
import SvgClose from "./SvgClose";

export default memo(function TodoListItem({
    todo,
    toggleTodo,
    deleteTodo,
    modifyTodo
}:{
    todo: Todo,
    toggleTodo: (id: number) => void,
    deleteTodo: (id: number) => void,
    modifyTodo: (id: number, title: string) => void
}) {

    const [isModify, setIsModify] = useState(false); // 수정 모드 여부 판단
    const [modifyTitle, setModifyTitle] = useState(''); // 수정할 내용을 담은 상태

    const modifyHandler = () => {
        setIsModify(
            (modify) => !modify
        );
        setModifyTitle(modifyTitle === '' ? todo.title : modifyTitle);

        if (modifyTitle.trim() !== '' && modifyTitle !== todo.title) {
            modifyTodo(todo.id, modifyTitle)
        }
    }

    console.log('TodoListItem rendering');
    return (
        <li className={`todo__item ${todo.done && 'todo__item--complete'}`}>
            {/* 수정모드가 아닐 때 */}
            {
                !isModify && (
                    <Checkbox
                        parentClassName="todo__checkbox-group"
                        type="checkbox"
                        className="todo__checkbox"
                        checked={todo.done}
                        onChange={() => toggleTodo(todo.id)}
                        >
                        {todo.title}
                    </Checkbox>
                )
            }

            {/* 수정 모드일 때 */}
            {
                isModify && (
                    <Input 
                        type='text'
                        className="todo__modify-input"
                        value={modifyTitle}
                        onChange={(e) => setModifyTitle(e.target.value)}
                    />
                )
            }
            
            <div className="todo__button-group">
                <Button className="todo__action-button" onClick={modifyHandler}>
                    <SvgPencil />
                </Button>
                <Button className="todo__action-button" onClick={()=>deleteTodo(todo.id)} >
                    <SvgClose />
                </Button>
            </div>
        </li>
    )
});