import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
        <header>
            <h1>My Application</h1>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <p>© 2024 My Application</p>
        </footer>
    </>
  );
}