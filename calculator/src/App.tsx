import { useState } from "react";

export default function App() {

  const [state, setState] = useState({
    currentNumber: '0',
    previousNumber: '',
    operation: null,
    isNewNumber: true,
  });

  // 숫자 버튼 클릭 처리
  const handleNumberClick = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    console.log(event.currentTarget.value);
  }

  // 연산 기호 버튼 클릭 처리
  const HandleOperatorClick = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    console.log(event.currentTarget.value);
  }

  // C버튼 클릭 처리 (모든 상태 초기화)
  const handleClear = () => {
    console.log('clear');
  }

  // 소수점 버튼 클릭 처리: 현재 숫자에 소수점이 없을 경우에만 추가
  const handleDot = () => {
    console.log('dot');
  };

  return (
      <article className="calculator">
        <form name="forms">
          <input type="text" name="output" value = { state.currentNumber } readOnly />
          <input type="button" className="clear" value="C" onClick={handleClear}/>
          <input type="button" className="operator" value="/" />
          <input type="button" value="1" onClick={handleNumberClick}/>
          <input type="button" value="2" onClick={handleNumberClick}/>
          <input type="button" value="3" onClick={handleNumberClick}/>
          <input type="button" className="operator" value="*" />
          <input type="button" value="4" onClick={handleNumberClick}/>
          <input type="button" value="5" onClick={handleNumberClick}/>
          <input type="button" value="6" onClick={handleNumberClick}/>
          <input type="button" className="operator" value="+" />
          <input type="button" value="7" onClick={handleNumberClick}/>
          <input type="button" value="8" onClick={handleNumberClick}/>
          <input type="button" value="9" onClick={handleNumberClick}/>
          <input type="button" className="operator" value="-" />
          <input type="button" className="dot" value="." onClick={handleDot}/>
          <input type="button" value="0" onClick={handleNumberClick}/>
          <input type="button" className="operator result" value="=" onClick={HandleOperatorClick}/>
        </form>
      </article>
  );
}
