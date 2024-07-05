import { Button, Checkbox, Form } from 'semantic-ui-react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const LoginForm = (props) => {
    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate;

    const onButtonClick = () => {
        setUsernameError('');
        setPasswordError('');

        if('' === username) {
            setUsernameError('Please enter valid username');
            return;
        }

        if ('' === password) {
            setPasswordError('Please enter valid password');
            return;
        }
    }
    return (
        <div className={'login-form'}>
            <div className={'form-field'}>
                <input 
                    value={username}
                    placeholder='Enter username' 
                    onChange={(e) => setUsername(e.target.value)}
                    className={'inputBox'}
                />
            <label className="errorLabel">{usernameError}</label>
            </div>
            <div className={'form-field'}>
                <input 
                    placeholder='Enter password' 
                    onChange={(e) => setPassword(e.target.value)}
                    className={'inputBox'}
                />
            <label className="errorLabel">{passwordError}</label>
            </div>
            <div className={'form-field'}>
            <input 
                className={'inputButton'} 
                type='button'
                onClick={onButtonClick}
                value={'Login'} 
            />
            </div>
        </div>
    )
}

export default LoginForm;