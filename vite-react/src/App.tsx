// import { Header } from "./components/Header";
// import { Main } from "./components/Main";
// import { Footer } from "./components/Footer";

import { useReducer } from 'react';
import { counterReducer } from './reducer/counterReducer';

export default function App() {
    const [count, countDispatch] = useReducer(counterReducer, 0);

    return (
        <div>
            <h1>Count: {count}</h1>

            <button onClick={() => countDispatch({ type: 'DECREMENT' })}>감소</button>
            <button onClick={() => countDispatch({ type: 'INCREMENT' })}>증가</button>
            <button onClick={() => countDispatch({ type: 'RESET' })}>초기화</button>
        </div>
    );
}