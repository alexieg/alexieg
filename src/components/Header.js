import './Header.css';
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'



function Header(props) {
    const { loggedIn, username} = props;
    const onClickLogin = () => {
        //something
    }

    return (
        <div className='header'>
            <div className='title'>
                <h1>Alexie's Journal</h1>
            </div>
            <div className='homelink'>
                <Link to='/'>home</Link>
            </div>
            <div className='loginlink'>
                <Link to='/login' value={loggedIn ? 'Log out' : 'Login'} >login</Link>
            </div>
      </div>
    )
}

export default Header;