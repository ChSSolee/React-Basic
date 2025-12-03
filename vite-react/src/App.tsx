// import { Header } from "./components/Header";
// import { Main } from "./components/Main";
// import { Footer } from "./components/Footer";
import { User } from './components/User';

export default function App() {
    const userObj = {
        name: '철수',
        age: 20
    };

    const clickHandler = () => {
        console.log('clicked');
    };

    return <User {...userObj} clickHandler={clickHandler} />;
}