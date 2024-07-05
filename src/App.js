import logo from './logo.svg';
/* import './App.css'; */
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import { HashRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
