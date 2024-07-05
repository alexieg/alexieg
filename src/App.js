import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage username={username} loggedIn={loggedIn} />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setUsername={setUsername} />} />
      </Routes>
    </>
  );
}

export default App;
