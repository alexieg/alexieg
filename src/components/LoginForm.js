import { Button, Checkbox, Form } from 'semantic-ui-react';
import { useState, useContext, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { UserContext } from '../contexts/user.context';



const LoginForm = () => {
    const navigate = useNavigate;
    const location = useLocation();

    //get and set user details
    const { user, fetchUser, usernamePasswordLogin } = useContext(UserContext);

    //useState to keep track of form values
    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const onFormInputChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value});
    };

    //redirect to appropriate page
    const redirectNow = () => {
        const redirectTo = location.search.replace("?redirectTo=", "");
        navigate(redirectTo ? redirectTo : "/");
    }

    //prevent having to constantly log in
    const loadUser = async () => {
        if (!user) {
            const fetchedUser = await fetchUser();
            if (fetchedUser) {
                //redirect once fetched
                redirectNow();
            }
        }
    }

    //verify user logged in
    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async (event) => {
        try {
            // Here we are passing user details to our emailPasswordLogin
            // function that we imported from our realm/authentication.js
            // to validate the user credentials and log in the user into our App.
            const user = await usernamePasswordLogin(form.username, form.password);
            if (user) {
            redirectNow();
            }
        } catch (error) {
            if (error.statusCode === 401) {
                alert("Invalid username/password. Try again!");
            } else {
                alert(error);
            }
        
        }
        };
    return (
        <div className={'login-form'}>
            <div className={'form-field'}>
                <input 
                    name="username"
                    type="username"
                    value={form.username}
                    placeholder='Enter username' 
                    onInput={onFormInputChange}
                    className={'inputBox'}
                />
            </div>
            <div className={'form-field'}>
                <input 
                    name="password"
                    type="password"
                    value={form.password}
                    placeholder='Enter password' 
                    onInput={onFormInputChange}
                    className={'inputBox'}
                />
            </div>
            <div className={'form-field'}>
            <input 
                className={'inputButton'} 
                type='button'
                onClick={onSubmit}
                value={'Login'} 
            />
            </div>
        </div>
    )
}

export default LoginForm;