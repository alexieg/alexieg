import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import PrivateRoute from './pages/PrivateRoute.page';
import { HashRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import { UserProvider } from "./contexts/user.context";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  return (
      <UserProvider>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/login" element={ <Login/> } />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={ <HomePage/> } />
          </Route>
        </Routes>
      </UserProvider>
  );
}

export default App;
