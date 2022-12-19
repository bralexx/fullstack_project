function LoginPage() {
  return (
    <div className='login-page-container'>
      <form className='login-page-form'>
        <text id='login-title'><bf>Log in</bf></text>
        <label for='Username'><b>Username</b></label>
        <input className='login-text-input' type='text' name='username' placeholder='Enter username'/>
        <label for='Password'><b>Password</b></label>
        <input className='login-text-input' type='password' name='password' placeholder='Enter password'/>
        <input id='login-submit-button' type='submit' value='Log in'/>
      </form>
    </div>
  );
}

export default LoginPage;