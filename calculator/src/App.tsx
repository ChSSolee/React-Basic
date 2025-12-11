import { useState } from "react";
import Decimal from "decimal.js";

interface CalculatorState {
  currentNumber: string;
  previousNumber: string; // 이전에 입력한 숫자
  operation: string | null; // 연산 기호 또는 null
  isNewNumber: boolean; // 새로운 숫자 입력 여부
}

export default function App() {

  const [state, setState] = useState<CalculatorState>({
    currentNumber: '0',
    previousNumber: '',
    operation: null,
    isNewNumber: true,
  });

  // 숫자 버튼 클릭 처리
  const handleNumberClick = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const value = event.currentTarget.value;
    if (state.isNewNumber) {
      setState({
        ...state,
        currentNumber:value,
        isNewNumber: false,
      });
    } else {
      setState({
        ...state,
        currentNumber: state.currentNumber + value,
      })
    }
  }

  // 연산 기호 버튼 클릭 처리
  const HandleOperatorClick = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    if (state.currentNumber === '0') return; // 숫자 없이 연산 버튼 클릭시 연산 종료

    const operator = event.currentTarget.value; // 현재 클릭한 연산 기호
    const current = parseFloat(state.currentNumber || '0'); // 현재 출력칸에 표시된 숫자를 숫자형으로 변환


    if (state.previousNumber !== '' && state.operation) {
      const prev = parseFloat(state.previousNumber); // 이전에 입력한 숫자를 숫자형으로
      let result = 0;

      switch (state.operation) { // 이전에 클릭한 연산 기호에 맞게 연산
        case '+':
          result = new Decimal(prev).plus(current).toNumber();
          break;
        case '-':
          result = new Decimal(prev).minus(current).toNumber();
          break;
        case '*':
          result = new Decimal(prev).times(current).toNumber();
          break;
        case '/':
          result = new Decimal(prev).dividedBy(current).toNumber();
          break;
      }

      if (operator === '=') { // 클릭한 연산 기호가 등호일 경우, 연산을 마무리
        setState({
          currentNumber: result.toString(),
          previousNumber: '',
          operation: null,
          isNewNumber: true,
        });
      } else { // 클릭한 연산 기호가 등호가 아닌 경우, 연산을 마무리하고 연산 기호를 갱신
        setState({
          currentNumber: '',
          previousNumber: result.toString(),
          operation: operator,
          isNewNumber: true
        });
      };

    // 첫 번쨰 숫자만 입력한 상태에서, 연산 기호를 클릭한 경우
    } else if (state.currentNumber !== '' && operator === '=') { // 숫자를 한번만 클릭한 상태에서 등호 클릭시, 상태를 유지하면서 다음 입력을 새 숫자로 간주
      setState({
        ...state,
        isNewNumber: true
      });


    } else {  // 이전에 입력한 숫자가 존재하고, 이전에 연산 기호를 클릭했다면 
        setState({
          currentNumber: '', 
          previousNumber: current.toString(), // 연산을 수행하지 않고, 현재 숫자를 이전 숫자에 저장하고 초기화
          operation: operator, // 클릭한 연산 기호를 저장
          isNewNumber: true
        });
    };
  }

  // C버튼 클릭 처리 (모든 상태 초기화)
  const handleClear = () => {
    setState({
      currentNumber: '0',
      previousNumber: '',
      operation: null,
      isNewNumber: true
    })
  }

  // 소수점 버튼 클릭 처리: 현재 숫자에 소수점이 없을 경우에만 추가
  const handleDot = () => {
    if (!state.currentNumber.includes('.')) {
      setState({
        ...state,
        currentNumber: state.currentNumber + '.',
        isNewNumber: false,
      })
    }
  }

  return (
      <article className="calculator">
        <form name="forms">
          <input type="text" name="output" value = { state.currentNumber } readOnly />
          <input type="button" className="clear" value="C" onClick={handleClear}/>
          <input type="button" className="operator" value="/" onClick={HandleOperatorClick}/>
          <input type="button" value="1" onClick={handleNumberClick}/>
          <input type="button" value="2" onClick={handleNumberClick}/>
          <input type="button" value="3" onClick={handleNumberClick}/>
          <input type="button" className="operator" value="*" onClick={HandleOperatorClick}/>
          <input type="button" value="4" onClick={handleNumberClick}/>
          <input type="button" value="5" onClick={handleNumberClick}/>
          <input type="button" value="6" onClick={handleNumberClick}/>
          <input type="button" className="operator" value="+" onClick={HandleOperatorClick}/>
          <input type="button" value="7" onClick={handleNumberClick}/>
          <input type="button" value="8" onClick={handleNumberClick}/>
          <input type="button" value="9" onClick={handleNumberClick}/>
          <input type="button" className="operator" value="-" onClick={HandleOperatorClick}/>
          <input type="button" className="dot" value="." onClick={handleDot}/>
          <input type="button" value="0" onClick={handleNumberClick}/>
          <input type="button" className="operator result" value="=" onClick={HandleOperatorClick}/>
        </form>
      </article>
  );
}
