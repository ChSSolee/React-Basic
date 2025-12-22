import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Summary from "./pages/Summary";
import RootLayout from "./layouts/RootLayout";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path = 'team/:teamId/group/:groupId' element={<Team />} />
        <Route path='my'>
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Summary />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
