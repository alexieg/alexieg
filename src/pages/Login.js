import Header from '../components/Header.js';
import './Login.css';
import LoginForm from '../components/LoginForm.js';

function Login() {
    return (
        <div>
            <Header />
            
            <div className='main'>
            <h1>Login</h1>
            </div>
            
            <div className='login'>
                <div>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default Login;