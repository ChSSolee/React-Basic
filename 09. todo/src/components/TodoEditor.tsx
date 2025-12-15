import { useState } from "react"
import Input from "./html/Input"
import Button from "./html/Button"

export default function TodoEdior() {
  const [text, setText] = useState('');

  return (
      <form className="todo__form">
        <div className="todo__editor">
          <Input
            type="text"
            className="todo__input"
            placeholder="Enter Todo List"
            value={text} onChange={(e) => e.setText(e.target.value)}
          />
          <Button className="todo__button" type="submit">Add</Button>
        </div>
      </form>
  )
}