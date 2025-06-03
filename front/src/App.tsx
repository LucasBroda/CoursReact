import Dashboard from '@pages/Dashboard';
import About from '@pages/About';
import Details from '@pages/Details';
import MainLayout from '@layout/MainLayout';
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={< MainLayout/>} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id/:test" element={<Details />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>

  )
}

export default App