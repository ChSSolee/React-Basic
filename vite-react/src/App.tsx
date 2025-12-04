// import { Header } from "./components/Header";
// import { Main } from "./components/Main";
// import { Footer } from "./components/Footer";


export default function App() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input type='text' name='email' />
      <input type='password' />
      <button type='submit'>전송</button>
    </form>
  )
}