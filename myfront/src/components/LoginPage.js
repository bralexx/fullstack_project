import {useContext} from 'react'
import AuthContext from '../context/AuthContext'

function LoginPage() {
  const {loginUser} = useContext(AuthContext)
  return (
    <div className='login-page-container'>
      <form className='login-page-form' onSubmit={loginUser}>
        <p id='login-title'><b>Log in</b></p>
        <label ><b>Username</b></label>
        <input className='login-text-input' type='text' name='username' placeholder='Enter username'/>
        <label ><b>Password</b></label>
        <input className='login-text-input' type='password' name='password' placeholder='Enter password'/>
        <input id='login-submit-button' type='submit' value='Log in'/>
      </form>
    </div>
  );
}

export default LoginPage;